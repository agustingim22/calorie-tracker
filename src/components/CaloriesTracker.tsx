import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CaloriesTrackerProps ={
    activities: Activity[]
}


export default function CaloriesTracker({activities} : CaloriesTrackerProps) {
  
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
  const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned ,[activities])
  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
        <div className=" text-white items-center md:flex md:justify-between gap-5 mt-10">
            <CalorieDisplay
                calories={caloriesConsumed}
                text="Consumidas"
            />
            <CalorieDisplay
                calories={caloriesBurned}
                text="Quemadas"
            />
            <CalorieDisplay
                calories={netCalories}
                text="Diferencia"
            />
        </div>
        
    </>
  )
}
