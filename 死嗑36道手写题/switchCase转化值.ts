type ISize = 'mini' | 'small' | 'medium' | 'large' | number

const isNumber = (target) => (Object.prototype.toString.call(target) as string).slice(8, -1).toLocaleLowerCase()

const getMargin = (size: ISize): number => {
    switch (size) {
        case isNumber(size):
            return size as unknown as number;
        case 'mini':
            return 4;
        case 'small':
            return 8;
        case 'medium':
            return 16;
        case 'large':
            return 24;
        default:
            return 8;
    }
}