const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const returnDamageOfDragon = () => {
      let damage = Math.round(Math.random() * (dragon.strength - 15) + 15 )
      return dragon.damage = damage
  }
  returnDamageOfDragon()


  const returnDamageOfWarrior = () => {
    const strength = warrior.strength * warrior.weaponDmg
    let damage = Math.round(Math.random() * (strength - warrior.strength) + warrior.strength)
    return warrior.damage = damage
  }
  returnDamageOfWarrior()
 

  const returnDamageOfMageAndMana = () => {
    const damageMax = mage.intelligence * 2
    const danoAndManaOneTurn = {
        dano: Math.round(Math.random() * (damageMax - mage.intelligence) + mage.intelligence),
        mana: Math.round(Math.random() * 125)
    }
    if(danoAndManaOneTurn.mana < 15) {
      danoAndManaOneTurn.dano = 'Não possui mana suficiente'
      danoAndManaOneTurn.mana = 0;
    }
    return danoAndManaOneTurn
  }


  const gameActions = {
    turnOfWarrior: (returnDamageOfWarrior) => {
      const warriorDamage = returnDamageOfWarrior()
      warrior.damage = warriorDamage
      dragon.healthPoints -= warriorDamage
    },
    mageTurn: (returnDamageOfMageAndMana) => {
      const mana = returnDamageOfMageAndMana().mana
      mage.mana = mana
      mage.damage = returnDamageOfMageAndMana().dano;
      dragon.healthPoints -= mage.damage;;
    },
    monsterTurn: (returnDamageOfDragon) => {
      const dragonDamage = returnDamageOfDragon();
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
    // Crie as HOFs neste objeto.

    gameActions.turnOfWarrior(returnDamageOfWarrior);
    gameActions.mageTurn(returnDamageOfMageAndMana);
    gameActions.monsterTurn(returnDamageOfDragon);
    console.log(gameActions.turnResults());
