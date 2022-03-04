import Category from './Category';
import Region from './Region';

export default class Delicacy {
    constructor(
        public id: string,
        public imageSrc: string,
        public name: string,
        public type: string,
        public description: string,
        public price: number,
        public availStartTime: Date, // to be replaced with custom object
        public availEndTime: Date, // to be replaced with custom object
        public waitingTime: number,
        public servedBy: string, // to be replaced with object
        public rating: number,
        public category: Category,
        public region: Region,
        public createdAt: Date,
        public updatedAt: Date,
        public calorie: number,
        public ingredients: Array<string>
    ) {}
}
