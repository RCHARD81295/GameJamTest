const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Tomato: 0},
	{Keyboard: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{TiledBackground4: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{TiledBackground5: 0},
	{Sprite3: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}