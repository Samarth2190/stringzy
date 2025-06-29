//TYPE DEFINITIONS ARE STORED HERE.

export type EffectArgs = (args: {
    history: {
        operation: string,
        value: string
    }[],
    first: string,
    target: string,
    pipe: ((data: string) => string)[],
    abort: () => any,
    forceStop: (last: string) => any,
    next: (string: string) => any,
    restartBeforeTransform: (string?: string) => any,
    restartAfterTransform: (string?: string) => any,
    moveToPipeIndex: (index: number) => any
}) => any

/**
 * Processes a string through a pipeline of transformation functions, optionally invoking an effect
 * hook with full context and control utilities.
 * 
 * I have made sure to make it work on any framework; i.e framework agonistic function, can be
 * used in react/svelte/vue or anything for that matter.
 *
 * @author github.com/MayukhChakrabortyDX
 * @param {Object} params - Configuration object.
 * @param {string} params.initial - The initial input string to be processed.
 * @param {Array<(data: string) => string>} params.pipe - An array of transformation functions to be applied sequentially.
 * @param {(args: {
 *   history: { operation: string, value: string }[],
 *   first: string,
 *   target: string,
 *   pipe: Array<(data: string) => string>,
 *   abort: () => any,
 *   forceStop: (last: string) => any,
 *   next: (string: string) => any,
 *   restartBeforeTransform: (string?: string) => any,
 *   restartAfterTransform: (string?: string) => any,
 *   moveToPipeIndex: (index: number) => any
 * }) => any} [params.effect] - Optional effect function that receives full control over the pipeline execution.
 *
 * @property {Array<{ operation: string, value: string }>} history - A log of each transformation step applied.
 * @property {string} first - The original input string before any transformations.
 * @property {string} target - The final string after all transformations are complete.
 * @property {Array<(data: string) => string>} pipe - The array of transformation functions.
 * @property {Function} abort - Stops execution immediately.
 * @property {Function} forceStop - Halts execution and returns the last computed value.
 * @property {Function} next - Continues processing from the next step with a given string.
 * @property {Function} restartBeforeTransform - Re-runs the entire pipeline starting from the first transform. Optionally accepts a new initial string.
 * @property {Function} restartAfterTransform - Re-runs the pipeline after effect is invoked. Optionally accepts a new string.
 * @property {Function} moveToPipeIndex - Jumps to a specific index in the pipeline to resume processing.
 */

export function pipeLine(
    { initial, pipe, effect = () => { } }: {
        initial: string,
        pipe: ((data: string) => string)[],
        effect?: EffectArgs
    }
) {
    const cacheStart = initial;
    let abortSignal = false
    let continueSignal = false
    let restartAfterTransform = false
    const history: {
        operation: string,
        value: string
    }[] = [{
        operation: "pipe", value: cacheStart
    }]

    for (let pipeIndex = 0; pipeIndex < pipe.length; pipeIndex++) {

        continueSignal = false
        restartAfterTransform = false

        effect(
            {
                history,
                first: cacheStart,
                target: initial,
                pipe,
                abort() {
                    abortSignal = true
                },
                forceStop(last: string) {
                    abortSignal = true
                    initial = last
                },
                next(string: string) {
                    initial = string
                    continueSignal = true
                },
                restartBeforeTransform(string?: string) {
                    if (string != undefined) initial = string
                    pipeIndex = 0
                },
                moveToPipeIndex(index: number) {
                    pipeIndex = index
                },
                restartAfterTransform(string?: string) {
                    if (string != undefined) initial = string
                    restartAfterTransform = true
                }
            }
        )


        if (continueSignal && !restartAfterTransform) continue;

        if (abortSignal) break;
        initial = pipe[pipeIndex](initial)
        history.push({
            operation: pipe[pipeIndex].name,
            value: initial
        })

        if (restartAfterTransform) { pipeIndex = -1 }

    }

    return {
        history, output: initial
    }

}

export interface PipeAPI {
    effect(callback: EffectArgs): PipeAPI,
    flow(...pipe: ((data: string) => string)[]): string,
    raw(...pipe: ((data: string) => string)[]): ReturnType<typeof pipeLine>
}
//lighter pipe for more readable application
export function pipe(initial: string): PipeAPI {

    const state: {

        called: {
            pipe: boolean,
            effect?: EffectArgs,
        },
        initial: string

    } = {
        called: {
            pipe: false,
        },
        initial
    };

    const api = new Proxy({}, {
        get(_, prop) {
            if (prop === "flow") {
                //pipe function
                return (...pipe: ((data: string) => string)[]) => {

                    state.called.pipe = true;

                    const output = pipeLine({
                        initial: state.initial,
                        pipe,
                        effect: state.called.effect
                    })

                    return output.output


                }
            } else if (prop === "effect") {

                return (effect?: EffectArgs) => {
                    state.called.effect = effect
                    return api
                }

            } else if (prop === "raw") {

                return (...pipe: ((data: string) => string)[]) => {

                    state.called.pipe = true;

                    const output = pipeLine({
                        initial: state.initial,
                        pipe,
                        effect: state.called.effect
                    })

                    return output

                }

            }
        }
    })

    //@ts-ignore
    return api

}