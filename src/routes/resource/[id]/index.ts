import type { RequestHandler } from "../../../../.svelte-kit/types/src/routes/resource/[id]/__types/index";

export const get: RequestHandler = ({params}) => {
    return {body: { id: params.id}}
}
