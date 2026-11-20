// priority: 2
"use strict";

ServerEvents.tags('item', event => {
	registerRemoveTags(event)
})

ServerEvents.tags('block', event => {
	registerRemoveTags(event)
})

ServerEvents.recipes(event => {
	registerCreateFactoryControllerRecipes(event)
})
