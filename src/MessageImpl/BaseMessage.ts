import { IDanmaMessage, Point, Rect } from "../interface/IDanmaMessage";
import { IDanmaTrackInfo } from "../interface/IDanmaTrack";

export abstract class BaseMessage implements IDanmaMessage {
  created: boolean=false;
  distoryed: boolean=false;
  isInit: boolean=false

  position: Point = {
    top: 0,
    left: 0
  }
  size: Rect = {
    width: 0,
    height: 0
  }
  onBaseCreate():void{
    this.created=this.onCreate()
  }
  onBaseDestroyed():void{
    this.distoryed=this.onDestroyed()
  }
  onBaseMeasure(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo):void{
    this.size=this.onMeasure(ctx,trackInfo)
  }
  onBaseLayout(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo): void {
    this.position = this.onLayout(ctx, trackInfo)
  }
  onBaseDraw(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo){
    this.onDraw(ctx,trackInfo)
  }

  abstract onCreate(): boolean
  abstract onMeasure(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo): Rect
  abstract onLayout(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo): Point
  abstract onDraw(ctx: CanvasRenderingContext2D, trackInfo: IDanmaTrackInfo): void
  abstract onDestroyed(): boolean 
}