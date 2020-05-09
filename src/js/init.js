var processor = new Generator("processor", "geometric")

var autotoaster = new Generator("autotoaster", "arithmetic")
var autotoaster_speed = new Generator("autotoaster.speed", "geometric")
var autotoaster_efficiency = new Generator("autotoaster.efficiency", "geometric")

var megatoaster = new Generator("megatoaster", "arithmetic")
var megatoaster_speed = new Generator("megatoaster.speed", "geometric")
var megatoaster_efficiency = new Generator("megatoaster.efficiency", "geometric")

var rockettoaster = new Generator("rockettoaster", "arithmetic")
var rockettoaster_speed = new Generator("rockettoaster.speed", "geometric")
var rockettoaster_efficiency = new Generator("rockettoaster.efficiency", "geometric")

sequence.init()
events.init()
control.init()
theme.init()
readout.init()
tick.init()
