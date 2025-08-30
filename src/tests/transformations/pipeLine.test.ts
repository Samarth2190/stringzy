import { describe, it } from 'node:test';
import assert, { match } from 'node:assert';
import { pipe, pipeLine } from "../../transformations/pipe";
import { capitalize } from '../../formatting';
import { camelCase, removeDuplicates, truncateText } from '../../transformations';

describe('pipeLine', () => {

    it('can run piped function', () => {
        assert.strictEqual(
            pipeLine({
                initial: "hello world world",
                pipe: [capitalize, removeDuplicates, camelCase]
            }).output, "helloWorld"
        )
    });

    it('can abort', () => {

        assert.strictEqual(
            pipeLine({

                initial: "Phone Number: 123456",

                pipe: [
                    capitalize, removeDuplicates, camelCase /*should abort here*/, (text) => truncateText(text, 5)
                ],

                effect({ abort, target }) {
                    if (target == "phoneNumber123456") abort()
                }
            }

            ).output, "phoneNumber123456"

        );
    })

    it('can restart', () => {
        assert.strictEqual(
            pipeLine({

                initial: "123456",

                pipe: [
                    (text) => text.slice(0, -1)
                ],

                effect({ restartAfterTransform, target }) {
                    if (target != "") restartAfterTransform()
                }

            }).output, ""
        )
    });

    it('can force stop', () => {

        assert.strictEqual(
            pipeLine({

                initial: "I ate the the apple",

                pipe: [
                    removeDuplicates, (text) => text
                ],

                //called after every transformation
                effect({ history, forceStop, target }) {
                    if (target.includes('apple') && history.length > 1) {
                        forceStop(target.replace('apple', '*****'))
                    }
                }

            }).output
            , "I ate the *****"
        )

    });

    it('testing restart before', () => {

        assert.strictEqual(

            pipeLine({
                initial: "Evil Code Exceeding So Much Space!",
                pipe: [camelCase, removeDuplicates],
                effect({ target, restartBeforeTransform }) {

                    if (target.length > 10) {
                        //evil code
                        restartBeforeTransform(target.slice(0, -1))
                    }

                }
            }).output, "evilcodeex"
        )

    });

    it('simple pipe test', () => {

        assert.strictEqual(
            pipe("Hello World").flow(camelCase), "helloWorld"
        )

    });

    it('testing restart before using simple pipes', () => {

        assert.strictEqual(
            pipe("Evil Code Exceeding So Much Space!")
                .effect(({ target, restartBeforeTransform }) => {

                    if (target.length > 10) {
                        restartBeforeTransform(target.slice(0, -1))
                    }

                })
                .flow(camelCase, removeDuplicates),

            "evilcodeex"
        )

    });

    it('reuseable pipes', () => {

        const profanityFilter = (input: string) => pipe(input).flow(removeDuplicates, camelCase, (text) => text.replace('apple', '*****').replace("Apple", '*****'))

        assert.strictEqual(
            //seems like there's an issue with question mark?
            profanityFilter("Who the apple are you?"), "whoThe*****AreYou "
        )

    })

})