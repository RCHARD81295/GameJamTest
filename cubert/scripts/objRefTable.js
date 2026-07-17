const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Particles,
		C3.Behaviors.Orbit,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Sprite: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Sprite2: 0},
	{Particles: 0},
	{Sprite3: 0},
	{Orbit: 0},
	{Sprite4: 0},
	{TiledBackground2: 0},
	{Particles2: 0},
	{Text: 0},
	{Text2: 0},
	{Keyboard: 0},
	{Text3: 0},
	{TiledBackground3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Text4: 0},
	{Sprite7: 0},
	{Text5: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Keyboard: class extends self.IInstance {},
	Text3: class extends self.ITextInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Text4: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Text5: class extends self.ITextInstance {}
}