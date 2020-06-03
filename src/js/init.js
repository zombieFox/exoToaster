// systems
var processor = new System("processor", "geometric", 2)
var electromagnetic = new System("electromagnetic", "geometric", 10)

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
theme.init()
control.init()
cycle.init()
keyboard.init()
menu.init()
version.init()
motivation.init()
events.init()
strategy.init()
boot.init()
favicon.init()
