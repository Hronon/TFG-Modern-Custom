// priority: 0
"use strict";

function registerRemoveTags(event) {
	event.removeAll("livingwind:grass_emitters");
	event.removeAll("unusual_furniture:card");
	event.removeAll("create_furniture:card");

	event.remove("create:seats", "unusual_furniture:industrial_bench");
	event.remove("create:non_movable", "unusual_furniture:industrial_bench");
	event.remove("forge:sit_tag", "unusual_furniture:industrial_bench");
}
