Fitness Log UI
==============

Dashboard view
---------

Tabs for either calendar or stats view:

Calendar view
--------------

Calendar showing days with/without activities, activities can be:
- Measurement (e.g. weight, height, fat content)
- Workout (grouping of activities) (e.g. gym visit)
- Individual activity (e.g run, bike, swim)

Can select an individual activity to show/edit, and also add an activity for a day

Adding an activity allows you to choose from your common activities or add a totally new one

Stats view
----------

Ability to view a range of historic stats, potentially >1 on a single graph. These can either be measurements, or direct activity stats or derived activity stats (e.g. 1RM) aggregated over various windows and shown over various periods.

Measurements
------------

Literally just record a measurement for a date/time.

Workout
-------

Select an existing workout as a base or start a new one.

In a work out you can add activities and reorder them, save the workout, name the workout, delete a workout.

Activity
--------

In an activity you can record info related to the activity (e.g. sets/reps/weights or distance/time) as well as record the machine it was done on (where appropriate) and store notes on each machine (e.g. settings you commonly use) - these are stored against the machine, not against the activity.

Recording activities will also store activity appropriate extra stats (e.g. 1RM or calculated marathon pace or METs)

Fitness Log API
===============

* /api/log/entries - GET

  List all entries for a given date range
 
* /api/log/entry - PUT

  Create a new entry
  
  {
  when:now(),
  type:"activity|workout|measurement",
  id:"1234"???
  }

* /api/measurement_types - GET

  List all the measurement types known about

* /api/measurements - GET
  
  Get (filtered) measurements

* /api/measurement - PUT
  
  Add a measurement
  
  {when:now(), type:"weight", value:91.5, units:"kg"}

* /api/machines - GET

  List all (filtered) machines
  
* /api/machine - PUT

  Add a machine
  
  {name:"name", activity_types:["activity_type1"], notes:""}
  
* /api/machine - POST

  Edits a machine
  
  {name:"name", activity_types:["activity_type1"], notes:""}
  
* /api/locations - GET

  Get known locations
  
* /api/location - PUT

  Add a location
  
  {name:"YMCA Central"}
  
* /api/location - POST

  Edit a location
  
  {name:"YMCA Central"}
  
* /api/workouts - GET

  List all (filtered) workouts

* /api/workout - PUT

  {
    start:now(),
    end:now(),
    activities:[],
    location:"YMCA Central"
  }
  
* /api/activity_types - GET

  List all (filtered) activity types
  
* /api/activity_type - PUT

  Add a new activity type
  
  {name:"adductor",fitocracy:"Adductor"}
  
* /api/activities - GET

  List (filtered) individual activities
  
* /api/activity - PUT

  Add a new individual activity
  
* /api/activity - POST

  Edit an individual activity
  
  
