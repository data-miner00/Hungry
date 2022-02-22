export default class DelicacyCardDataModel {
  private static date = new Date();

  public constructor(
    public imageSrc: string = '',
    public name: string = 'BigMac',
    public type: string = 'Burger',
    public description: string = "The newest item in the 'McMetaverse' franchise!",
    public price: number = 4.5,
    public availStartTime: Date = DelicacyCardDataModel.date,
    public availEndTime: Date = new Date(
      DelicacyCardDataModel.date.setHours(
        DelicacyCardDataModel.date.getHours() + 5
      )
    ),
    public waitingTime: number = 50,
    public servedBy: string = 'McDonalds'
  ) {}
}
