const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true)

function createScene() {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  box.position = new BABYLON.Vector3(0,5,1, 1);
  box.scaling = new BABYLON.Vector3(1, 1.5, 5);
  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
roof.scaling.x = 0.75;
roof.rotation.z = Math.PI / 2;
roof.position.y = 1.22;
  // const mesh = BABYLON.SceneLoader.ImportMeshAsync("cube", "./", "cub.babylon");
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});

  return scene;
};
const scene = createScene(); 



engine.runRenderLoop(function () {
		scene.render();
});