export const deepEqual = (object, filter) => Array.isArray(filter) ?
    filter.includes(object) : typeof filter !== "object" ?
        object === filter :
        Object.keys(filter).map(field => {
            return deepEqual(object[field], filter[field])
        }).reduce((a, b) => a && b, true)

export const idToTile = (id, width) => ({
    x: (id % width),
    y: (Math.floor(id / width))
})

export const idToPos = (id, width) => {
    const tile = idToTile(id, width) * 16
    return {x: tile.x * 16, y: tile.y * 16}
}

export const posToId = ({x, y}, width) => (y * 50) + x;
