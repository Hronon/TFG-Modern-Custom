// priority: 0
"use strict";

function registerCreateFactoryControllerRecipes(event) {
    event.remove({ output: 'createlogisticscontrol:filter_link' })

    event.shaped('createlogisticscontrol:filter_link', ['#', 'A', 'B'], { '#': 'create:transmitter', 'A': 'create:package_filter', 'B': 'create:stock_link' }).id('tfg_custom:create_factory_controller/filter_link')

    event.shaped('createfactorycontroller:factory_controller', ['#AB', 'CDC', 'EFE'], { '#': 'create:factory_gauge', 'A': 'create:redstone_link', 'B': 'create:stock_link', 'C': 'create:sturdy_sheet', 'D': '#gtceu:circuits/lv', 'E': 'create:brass_casing', 'F': 'create:contraption_controls' }).id('tfg_custom:create_factory_controller/factory_controller')

    event.shapeless('createfactorycontroller:arithmetic_tube', ['create:electron_tube', 'gtceu:flawed_amethyst_gem']).id('tfg_custom:create_factory_controller/arithmetic_tube')
}