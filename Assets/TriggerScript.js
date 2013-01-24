#pragma strict
private var goalFlag:boolean;
function Start () {//実行前に行われる
	goalFlag=false;

}
function OnTriggerEnter (other : Collider){//トリガー進入時に行われ
	if(other.gameObject.tag.Equals("PlayerBallTag")){
	goalFlag = true;
	}
}
function OnTriggerExit(other:Collider){//トリガー退場時に行われる
}

	
function Update () {

}