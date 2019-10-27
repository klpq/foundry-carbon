import { ActorTraitSelector } from "../../apps/trait-selector.js";
import { ActorSheetFlags } from "../../apps/actor-flags.js";
import { ActorSheet5e } from "../sheets/base.js";

/**
 * My new NPC sheet
 *
 * @type {ActorSheet}
 */
export class ActorNPCSheet5e extends ActorSheet5e {

  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "npc"],
      width: 620,
      height: 710
    });
  }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    if ( !game.user.isGM && this.actor.limited ) return "public/systems/dnd5e/templates/actors/limited-sheet.html";
    return "public/systems/dnd5e/templates/npc/npc-sheet.html";
  }

  /* -------------------------------------------- */

  /**
   * Organize Owned Items for rendering the NPC sheet
   * @private
   */
  _prepareItems(sheetData) {
    const actorData = sheetData.actor;

    // Categorize Items as Features and Spells
    const features = {
      weapons: {label: "Attacks", items: [], type: "weapon", subtype: "" },
      actions: { label: "Actions", items: [], type: "feat", subtype: "ability" },
      passive: { label: "Features", items: [], type: "feat", subtype: "passive" },
      equipment: { label: "Inventory", items: [], type: "backpack", subtype: "" }
    };

    // Spellbook
    const spellbook = {};

    // Iterate through items, allocating to containers
    for ( let i of sheetData.items ) {
      i.img = i.img || DEFAULT_TOKEN;

      // Spells
      if ( i.type === "spell" ) this._prepareSpell(actorData, spellbook, i);

      // Features
      else if ( i.type === "weapon" ) features.weapons.items.push(i);
      else if ( i.type === "feat" ) {
        if ( i.data.featType.value === "passive" ) features.passive.items.push(i);
        else features.actions.items.push(i);
      }
      else if (["equipment", "consumable", "tool", "backpack"].includes(i.type)) features.equipment.items.push(i);
    }

    // Assign and return
    actorData.features = features;
    actorData.spellbook = spellbook;
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
	activateListeners(html) {
    super.activateListeners(html);
  }
}