function calcAverageCalories(days) {
    const totalCalories = sum('calories');
    const averageCalories = totalCalories / len(days);
    return averageCalories;
}
days = [
    {'day': 'Monday', 'calories': 2500},
    {'day': 'Tuesday', 'calories': 2200},
    {'day': 'Wednesday', 'calories': 3000},
    {'day': 'Thursday', 'calories': 2800},
    {'day': 'Friday', 'calories': 2600},
    {'day': 'Saturday', 'calories': 2700},
    {'day': 'Sunday', 'calories': 2400}
]
