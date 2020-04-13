/**
 * カードクラス
 */
export var Card = function (mark, number) {
    this.mark = mark
    this.number = number
}

/**
 * カードのマーク
 */
export const CARD_MARK = {
    SPADE: "SPADE",
    HEART: "HEART",
    DIAMOND: "DIAMOND",
    CLUB: "CLUB",
    JOKER: "JOKER" 
}

export const JOKER_CARD_NUMBER = 0

