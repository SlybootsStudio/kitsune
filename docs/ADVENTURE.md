# Adventure

Adventures run automatically. It is the primary game loop. They are a sequence of actions which contain mostly combat, but can contain other skills (such as climbing trees, crossing rivers, picking locks, etc).


## Data

```
[
  {
    actionId : *skillId*,
    rating : 0 - 100
  },
  {
    actionId : combat,
    actionSpec : combat43,
    onComplete : 
  }
}



Toggle actions within adventure to execute skills when opportunity presents.


