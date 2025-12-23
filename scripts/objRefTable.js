const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Spritefont2,
		C3.Plugins.Touch,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Particles.Acts.SetRate,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Spritefont2.Acts.SetInstanceVar,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Spritefont2.Acts.AddInstanceVar
	];
};
self.C3_JsPropNameTable = [
	{Синусоида: 0},
	{Печенька: 0},
	{Счетчик: 0},
	{Фон: 0},
	{Поля: 0},
	{Цена: 0},
	{Апгрейд: 0},
	{Уровень: 0},
	{Доход: 0},
	{Печка: 0},
	{Кафе: 0},
	{Фабрика: 0},
	{КартинкаПечки: 0},
	{КартинкаКафе: 0},
	{КартинкаФабрики: 0},
	{Тач: 0},
	{Рамка: 0},
	{Крошки: 0},
	{подложка: 0},
	{Прибль_за_тап: 0},
	{Деньги: 0}
];

self.InstanceType = {
	Печенька: class extends self.ISpriteInstance {},
	Счетчик: class extends self.ISpriteFontInstance {},
	Фон: class extends self.ISpriteInstance {},
	Поля: class extends self.ISpriteInstance {},
	Апгрейд: class extends self.ISpriteFontInstance {},
	Печка: class extends self.ISpriteFontInstance {},
	Кафе: class extends self.ISpriteFontInstance {},
	Фабрика: class extends self.ISpriteFontInstance {},
	КартинкаПечки: class extends self.ISpriteInstance {},
	КартинкаКафе: class extends self.ISpriteInstance {},
	КартинкаФабрики: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	Рамка: class extends self.ISpriteInstance {},
	Крошки: class extends self.IParticlesInstance {},
	подложка: class extends self.ISpriteInstance {}
}