import {deepEqual, posToId, idToPos, idToTile} from "./utils.js";

export const scene = new Phaser.Class({

    Extends: Phaser.Scene,


    /*
        0 -> void
        1 -> dropoff
        2 -> center
        3 -> top
        4 -> left
        5 -> right
        6 -> bottom
     */
    frameData: [
        {
            filename: "floor_corner_top_left",
            edgeData: {
                n: 0,
                w: 0,
                e: 3,
                s: 4
            }
        },
        {
            filename: "floor_side_top_1",
            edgeData: {
                n: 0,
                w: 3,
                e: 3,
                s: 2
            }
        },
        {
            filename: "floor_side_top_2",
            edgeData: {
                n: 0,
                w: 3,
                e: 3,
                s: 2
            }
        },
        {
            filename: "floor_side_top_3",
            edgeData: {
                n: 0,
                w: 3,
                e: 3,
                s: 2
            }
        },
        {
            filename: "floor_corner_top_right",
            edgeData: {
                n: 0,
                w: 0,
                e: 3,
                s: 5
            }
        },

        {
            filename: "floor_side_left_1",
            edgeData: {
                n: 4,
                w: 0,
                e: 2,
                s: 4
            }
        },
        {
            filename: "floor_center_1",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_2",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_3",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_side_right_1",
            edgeData: {
                n: 5,
                w: 2,
                e: 0,
                s: 5
            }
        },

        {
            filename: "floor_side_left_2",
            edgeData: {
                n: 4,
                w: 0,
                e: 2,
                s: 4
            }
        },
        {
            filename: "floor_center_4",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_5",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_6",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_side_right_2",
            edgeData: {
                n: 5,
                w: 2,
                e: 0,
                s: 5
            }
        },

        {
            filename: "floor_side_left_3",
            edgeData: {
                n: 4,
                w: 0,
                e: 2,
                s: 4
            }
        },
        {
            filename: "floor_center_7",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_8",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_center_9",
            edgeData: {
                n: 2,
                w: 2,
                e: 2,
                s: 2
            }
        },
        {
            filename: "floor_side_right_3",
            edgeData: {
                n: 5,
                w: 2,
                e: 0,
                s: 5
            }
        },

        {
            filename: "floor_corner_bottom_left",
            edgeData: {
                n: 4,
                w: 0,
                e: 6,
                s: 1
            }
        },
        {
            filename: "floor_side_bottom_1",
            edgeData: {
                n: 2,
                w: 6,
                e: 6,
                s: 1
            }
        },
        {
            filename: "floor_side_bottom_2",
            edgeData: {
                n: 2,
                w: 6,
                e: 6,
                s: 1
            }
        },
        {
            filename: "floor_side_bottom_3",
            edgeData: {
                n: 2,
                w: 6,
                e: 6,
                s: 1
            }
        },
        {
            filename: "floor_corner_bottom_right",
            edgeData: {
                n: 5,
                w: 6,
                e: 0,
                s: 1
            }
        },

        {
            filename: "floor_dropoff_1",
            edgeData: {
                n: 6,
                w: 1,
                e: 1,
                s: 0
            }
        },
        {
            filename: "floor_dropoff_2",
            edgeData: {
                n: 6,
                w: 1,
                e: 1,
                s: 0
            }
        },
        {
            filename: "floor_dropoff_3",
            edgeData: {
                n: 6,
                w: 1,
                e: 1,
                s: 0
            }
        },
        {
            filename: "floor_dropoff_4",
            edgeData: {
                n: 6,
                w: 1,
                e: 1,
                s: 0
            }
        },
        {
            filename: "floor_dropoff_5",
            edgeData: {
                n: 6,
                w: 1,
                e: 1,
                s: 0
            }
        },
    ],

    nextUpdate: 0,

    preload: function() {

        const atlasFrames = []
        const atlasMeta = {
            "version": "1.0",
            "image": "dungeon_tiles.png",
            "format": "RGBA8888",
            "size": {"w": 368, "h": 384},
            "scale": "1",
        }
        const start = {x: 33, y: 33};
        const tile = {w: 16, h: 16};

        for (let i = 0; i < this.frameData.length; i++) {
            atlasFrames.push({
                ...this.frameData[i],
                frame: {
                    ...tile,
                    x: start.x + ((i % 5) * tile.w),
                    y: start.y + (Math.floor(i / 5) * tile.h),
                }
            })
        }

        atlasFrames.push({
            filename: "void",
            frame: {
                ...tile,
                x: 224,
                y: 224,
            }
        })

        this.load.atlas('dung_tileset', 'assets/dungeon_tiles.png', {frames: atlasFrames, meta: atlasMeta})
    },

    create: function() {
        let atlasTexture = this.textures.get('dung_tileset');

        let gameSize = {w: 50, h: 50}
        const tileMap = []

        for (let i = 0; i < gameSize.w * gameSize.h; i++) {

            let tile = idToTile(i, gameSize.w)
            let position = {
                x: 16 * tile.x,
                y: 16 * tile.y
            }
            this.add.image(position.x, position.y, 'dung_tileset', "void");

            tileMap.push({position, tile, deployed: false, options: this.frameData})
        }

        const chosenPosition = {
            x: Math.floor(Math.random() * gameSize.w),
            y: Math.floor(Math.random() * gameSize.h),
        }
        const chosenTile = this.frameData[ Math.floor(Math.random() * this.frameData.length)].filename

        this.filterTile(tileMap, {tile: chosenPosition}, {filename: chosenTile})
    },

    update: function(curTime) {
        if (curTime > this.nextUpdate) {
            
        }
    },

    unfilterTile: function(tileMap, tileFilter, optionUnfilter) {
//    THINK ABOUT THIS LATER
    },

    filterTile: function(tileMap, tileFilter, optionFilter) {
        const tile = tileMap.find(obj => deepEqual(obj, tileFilter))

        if (!tile) {
            return;
        }

        tile.options = tile.options.filter(obj => deepEqual(obj, optionFilter))

        if (tile.options.length === 1) {
            this.deployTile(tileMap, tileFilter)
        }
    },

    filterTiles: function(tileMap) {

    },

    deployTile: function(tileMap, tileFilter) {
        const tile = tileMap.find(obj => deepEqual(obj, tileFilter))

        this.add.image(tile.position.x, tile.position.y, 'dung_tileset', tile.options[0].filename);
        tile.deployed = true
    }

})
