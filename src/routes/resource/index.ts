import type { RequestHandler } from "../../../.svelte-kit/types/src/routes/resource/__types/index";

export const get: RequestHandler = () => {
    return {body: {}}
}

export const post: RequestHandler = () => {

    return {status:302, headers: { location: `/resource/1`}}
}
