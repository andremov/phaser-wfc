import {deepEqual, posToId, idToPos, idToTile} from "./utils.js";

export const scene = new Phaser.Class({
    Extends: Phaser.Scene,

    /*
        0 -> void
        2 -> center
        3 -> top
        4 -> left
        5 -> right
        6 -> bottom

        7 -> dropoff-left
        8 -> dropoff-center
        9 -> dropoff-right

        10 -> dropoff-left-edge
        11 -> dropoff-right-edge
     */
    frameData: [
        {
            filename: ["floor_corner_top_left_1"],
            weight: 1,
            edgeData: {
                n: 0,
                w: 0,
                e: 3,
                s: 4
            }
        },
        {
            filename: ["floor_side_top_1", "floor_side_top_2", "floor_side_top_3", "floor_side_top_4", "floor_side_top_5", "floor_side_top_6"],
            weight: 5,
            edgeData: {
                n: 0,
                w: 3,
                e: 3,
                s: 2
            }
        },
        {
            filename: ["floor_corner_top_right_1"],
            weight: 1,
            edgeData: {
                n: 0,
                w: 3,
                e: 0,
                s: 5
            }
        },

        {
            filename: ["floor_side_left_1", "floor_side_left_2", "floor_side_left_3", "floor_side_left_4"],
            weight: 5,
            edgeData: {
                n: 4,
                w: 0,
                e: 2,
                s: 4
            }
        },
        {
            filename: ["floor_center_1", "floor_center_2", "floor_center_3", "floor_center_4", "floor_center_5", "floor_center_6", "floor_center_7"],
            weight: 100,
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: ["floor_side_right_1", "floor_side_right_2", "floor_side_right_3", "floor_side_right_4"],
            weight: 5,
            edgeData: {
                n: 5,
                w: 2,
                e: 0,
                s: 5
            }
        },

        {
            filename: ["floor_corner_bottom_left_1", "floor_corner_bottom_left_2"],
            weight: 1,
            edgeData: {
                n: 4,
                w: 0,
                e: 6,
                s: 7
            }
        },

        {
            filename: ["floor_corner_dropoff_left_1", "floor_corner_dropoff_left_2"],
            weight: 1,
            edgeData: {
                n: 7,
                w: 0,
                e: 0,
                s: 0
            }
        },
        {
            filename: ["floor_side_bottom_1", "floor_side_bottom_2", "floor_side_bottom_3"],
            weight: 5,
            edgeData: {
                n: 2,
                w: 6,
                e: 6,
                s: 8
            }
        },
        {
            filename: ["floor_dropoff_1", "floor_dropoff_2", "floor_dropoff_3"],
            weight: 1,
            edgeData: {
                n: 8,
                w: 0,
                e: 0,
                s: 0
            }
        },
        {
            filename: ["floor_corner_bottom_right_1"],
            weight: 1,
            edgeData: {
                n: 5,
                w: 6,
                e: 0,
                s: 9
            }
        },
        {
            filename: ["floor_corner_dropoff_right_1"],
            weight: 1,
            edgeData: {
                n: 9,
                w: 0,
                e: 0,
                s: 0
            }
        },


        {
            filename: ["floor_inner_corner_top_left_1"],
            weight: 2,
            edgeData: {
                n: 2,
                w: 2,
                e: 6,
                s: 11
            }
        },
        {
            filename: ["floor_inner_dropoff_top_left_1"],
            weight: 2,
            edgeData: {
                n: 11,
                w: 2,
                e: 0,
                s: 2
            }
        },
        {
            filename: ["floor_edge_dropoff_left_1", "floor_edge_dropoff_left_2", "floor_edge_dropoff_left_3", "floor_edge_dropoff_left_4"],
            weight: 1,
            edgeData: {
                n: 11,
                w: 2,
                e: 0,
                s: 5
            }
        },


        {
            filename: ["floor_inner_corner_top_right_1"],
            weight: 2,
            edgeData: {
                n: 2,
                w: 6,
                e: 2,
                s: 10
            }
        },
        {
            filename: ["floor_inner_dropoff_top_right_1"],
            weight: 2,
            edgeData: {
                n: 10,
                w: 0,
                e: 2,
                s: 2
            }
        },
        {
            filename: ["floor_edge_dropoff_right_1", "floor_edge_dropoff_right_2", "floor_edge_dropoff_right_3", "floor_edge_dropoff_right_4"],
            weight: 1,
            edgeData: {
                n: 10,
                w: 0,
                e: 2,
                s: 4
            }
        },


        {
            filename: ["floor_inner_corner_bottom_left_1"],
            weight: 2,
            edgeData: {
                n: 5,
                w: 2,
                e: 0,
                s: 2
            }
        },
        {
            filename: ["floor_inner_corner_bottom_right_1"],
            weight: 2,
            edgeData: {
                n: 4,
                w: 0,
                e: 2,
                s: 2
            }
        },
    ],

    tileMap: [],

    gameSize: {w: 50, h: 50, tile: 1},

    displayTileOptions: false,

    automaticCollapse: true,

    preload: function () {
        const atlasFrames = []
        const atlasMeta = {
            "version": "1.0",
            "image": "dungeon_tiles.png",
            "format": "RGBA8888",
            "size": {"w": 368, "h": 384},
            "scale": "1",
        }
        const tile = {w: 16, h: 16};

        for (let i = 0; i < this.frameData.length; i++) {
            for (let j = 0; j < this.frameData[i].filename.length; j++) {
                atlasFrames.push({
                    filename: this.frameData[i].filename[j],
                    frame: {
                        ...tile,
                        x: (j * tile.w),
                        y: (i * tile.h),
                    }
                })
            }
        }

        this.frameData.push({
            filename: ["void"],
            weight: 1,
            edgeData: {
                n: 0, w: 0, e: 0, s: 0
            }
        })

        atlasFrames.push({
            filename: "void",
            frame: {
                ...tile,
                x: 0,
                y: 320,
            }
        })

        this.frameData = this.frameData.map((obj, index) => ({...obj, index}))

        this.load.atlas('dung_tileset', 'assets/dungeon_tiles.png', {frames: atlasFrames, meta: atlasMeta})

        if (!this.automaticCollapse) {
            this.input.on('pointerup', () => this.setRandomTile())
        }
    },

    createBackground: function () {
        for (let i = 0; i < this.gameSize.w * this.gameSize.h; i++) {

            let tile = idToTile(i, this.gameSize.w)
            let tilePosition = {
                x: (8 * this.gameSize.tile) + (16 * this.gameSize.tile * tile.x),
                y: (8 * this.gameSize.tile) + (16 * this.gameSize.tile * tile.y)
            }
            const bkg = this.add.image(tilePosition.x, tilePosition.y, 'dung_tileset', "void");
            bkg.setScale(this.gameSize.tile, this.gameSize.tile)
        }

    },

    create: function () {
        this.createBackground()
        this.initTiles()
        this.setEdgeVoids()
    },

    update: function () {
        if (this.automaticCollapse) {
            this.setRandomTile()
        }
    },

    initTiles: function () {
        for (let i = 0; i < this.gameSize.w * this.gameSize.h; i++) {
            const displayedOptions = []
            let tile = idToTile(i, this.gameSize.w)
            let tilePosition = {
                x: (8 * this.gameSize.tile) + (16 * this.gameSize.tile * tile.x),
                y: (8 * this.gameSize.tile) + (16 * this.gameSize.tile * tile.y)
            }

            if (this.displayTileOptions) {
                for (let j = 0; j < this.frameData.length-1; j++) {
                    let option = idToTile(j, 4)
                    // console.log(option, tilePosition)
                    const optionScale = 0.9
                    let optionPosition = {
                        x: (-6 * this.gameSize.tile) + (17 * optionScale * option.x),
                        y: (-6 * this.gameSize.tile) + (17 * optionScale * option.y)
                    }

                    const obj = this.add.image(
                        tilePosition.x + optionPosition.x,
                        tilePosition.y + optionPosition.y,
                        'dung_tileset',
                        this.frameData[j].filename[0]
                    );
                    obj.setTint(0x00FF00)
                    obj.setScale(optionScale, optionScale)

                    displayedOptions.push(obj)
                }
            }

            this.tileMap.push({
                position: tilePosition,
                tile,
                deployed: false,
                options: this.frameData,
                displayedOptions
            })
        }
    },

    destroyTiles: function () {
        for (let i = 0; i < this.gameSize.w * this.gameSize.h; i++) {
            this.tileMap[i].deployedImage.destroy()
        }
        this.tileMap = []
    },

    setEdgeVoids: function () {
        const edgeCases = this.tileMap.filter(obj => obj.tile.x === 0 || obj.tile.y === 0 || obj.tile.x === this.gameSize.w - 1 || obj.tile.y === this.gameSize.h - 1)
        edgeCases.forEach(tileItem => this.filterTile({tile: tileItem.tile}, {index: this.frameData.length - 1}))
    },

    setRandomTile: function () {
        const chosenTile = this.tileMap
            .filter(item => !item.deployed)
            .sort((a, b) => a.options.length - b.options.length)
            [0]

        if (chosenTile) {
            if (chosenTile.options.length > 0) {
                const tileOptions = chosenTile.options.reduce((acc, cur) =>
                    ([...acc, ...((`${cur.index},`.repeat(cur.weight)).split(',').slice(0,-1))]),
                    [])
                const chosenOption = parseInt(tileOptions[Math.floor(Math.random() * tileOptions.length)])
                console.log("Random:",JSON.stringify(tileOptions), chosenOption, this.frameData.find(i => i.index === chosenOption).filename[0])
                this.filterTile({tile: chosenTile.tile}, {index: chosenOption})
            } else {
                const err = this.add.image(chosenTile.position.x, chosenTile.position.y, 'dung_tileset', "void");
                err.setTint(0xff0000)
                err.setScale(this.gameSize.tile, this.gameSize.tile)
            }
        } else {
            this.destroyTiles()
            this.initTiles()
            this.setEdgeVoids()
        }
    },

    filterTile: function (tileFilter, optionFilter) {
        // console.log(`Filtering tile ${JSON.stringify(tileFilter)}`)
        const tile = this.tileMap.find(obj => deepEqual(obj, tileFilter))

        if (!tile) {
            return;
        }
        // console.log("Filtering with ", JSON.stringify(optionFilter))
        // console.log(`Current options: [${tile.options.map(item => item.filename).reduce((acc, cur) => `${acc}"${cur}", `, '')}]`)

        const curOptionCount = tile.options.length
        tile.options = tile.options.filter(obj => deepEqual(obj, optionFilter))

        if (tile.options.length === 1) {
            // console.log("Only one option remaining for tile...")
            console.log("Forced:",JSON.stringify(tile.options.map(i => i.index)),tile.options[0].filename[0])
            this.deployTile(tileFilter)
            if (this.displayTileOptions) {
                tile.displayedOptions.forEach((item, index) => {
                    item.destroy()
                })
            }
        } else {
            //     console.log(`Remaining options: [${tile.options.map(item => item.filename).reduce((acc, cur) => `${acc}"${cur}", `, '')}]`)
            if (curOptionCount > tile.options.length) {
                this.filterSurroundingTiles(tileFilter)
                const optionIndexes = tile.options.map(item => item.index)
                if (this.displayTileOptions) {
                    tile.displayedOptions.forEach((item, index) => {
                        if (!optionIndexes.includes(index)) {
                            item.destroy()
                        }
                    })
                }
            }
        }
        // console.log("Filtered tile.")
        // console.log("")
    },

    deployTile: function (tileFilter) {
        const deployingTile = this.tileMap.find(obj => deepEqual(obj, tileFilter))

        // console.log(`Deploying tile in [${deployingTile.tile.x}, ${deployingTile.tile.y}] with type "${deployingTile.options[0].filename}"`)
        const chosenOptionNames = deployingTile.options[0].filename
        const chosenName = chosenOptionNames[Math.floor(Math.random() * chosenOptionNames.length)]
        const img = this.add.image(deployingTile.position.x, deployingTile.position.y, 'dung_tileset', chosenName);
        img.setScale(this.gameSize.tile, this.gameSize.tile)
        deployingTile.deployed = true
        deployingTile.deployedImage = img

        this.filterSurroundingTiles(tileFilter)
    },

    filterSurroundingTiles: function (tileFilter) {
        const filteringTile = this.tileMap.find(obj => deepEqual(obj, tileFilter))

        let thisEdgeData = filteringTile.options.reduce((acc, cur) => ({
            n: [...acc.n, cur.edgeData.n],
            e: [...acc.e, cur.edgeData.e],
            w: [...acc.w, cur.edgeData.w],
            s: [...acc.s, cur.edgeData.s],
        }), {n: [], e: [], w: [], s: []})

        thisEdgeData = {
            n: [...new Set(thisEdgeData.n)],
            e: [...new Set(thisEdgeData.e)],
            w: [...new Set(thisEdgeData.w)],
            s: [...new Set(thisEdgeData.s)],
        }

        // console.log(`Filter surrounding tiles with ${ JSON.stringify(thisEdgeData)}`)

        const northTile = this.tileMap.find(obj => deepEqual(obj, {
            deployed: false,
            tile: {
                x: filteringTile.tile.x, y: filteringTile.tile.y - 1
            }
        }))
        if (northTile) {
            // console.log(`Filtering north tile...`)
            this.filterTile({tile: northTile.tile}, {
                edgeData: {s: thisEdgeData.n}
            })
        }


        const southTile = this.tileMap.find(obj => deepEqual(obj, {
            deployed: false,
            tile: {
                x: filteringTile.tile.x, y: filteringTile.tile.y + 1
            }
        }))
        if (southTile) {
            // console.log(`Filtering south tile...`)
            this.filterTile({tile: southTile.tile}, {
                edgeData: {n: thisEdgeData.s}
            })
        }


        const westTile = this.tileMap.find(obj => deepEqual(obj, {
            deployed: false,
            tile: {
                x: filteringTile.tile.x - 1, y: filteringTile.tile.y
            }
        }))
        if (westTile) {
            // console.log(`Filtering west tile...`)
            this.filterTile({tile: westTile.tile}, {
                edgeData: {e: thisEdgeData.w}
            })
        }


        const eastTile = this.tileMap.find(obj => deepEqual(obj, {
            deployed: false,
            tile: {
                x: filteringTile.tile.x + 1, y: filteringTile.tile.y
            }
        }))
        if (eastTile) {
            // console.log(`Filtering east tile...`)
            this.filterTile({tile: eastTile.tile}, {
                edgeData: {w: thisEdgeData.e}
            })
        }
        // console.log("")
    }
})
