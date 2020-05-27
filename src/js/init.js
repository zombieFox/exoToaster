// systems
var processor = new System("processor", "geometric", 2)
var electromagnetic = new System("electromagnetic", "geometric", 1.1)
var sonic = new System("sonic", "geometric", 1.1)

// generators
var autotoaster = new Generator("autotoaster", "arithmetic", 1)
var megatoaster = new Generator("megatoaster", "arithmetic", 2)
var rockettoaster = new Generator("rockettoaster", "arithmetic", 4)
var sonictoaster = new Generator("sonictoaster", "arithmetic", 8)
var plasmatoaster = new Generator("plasmatoaster", "arithmetic", 16)
var atomictoaster = new Generator("atomictoaster", "arithmetic", 32)
var quantumtoaster = new Generator("quantumtoaster", "arithmetic", 64)

// init
data.init()
state.init()
control.init()
theme.init()
cycle.init()
keyboard.init()
menu.init()
version.init()
strategy.init()
motivation.init()
upgrade.init()
events.init()
boot.init()
