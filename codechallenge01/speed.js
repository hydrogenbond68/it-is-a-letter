// Function to determine if a driver's speed is within the acceptable limit or if there are any points to be assigned to their driving license
function lookAtSpeed(speed) {
    // Constant for the number of kilometers per point above the speed limit
    const KmPerPoint = 5;
    // Speed limit in km/h
    const speedLimit = 70;
    
    // If the driver's speed is within the speed limit
    if(speed <= speedLimit){
        return 'ok';  // Return 'ok' indicating the speed is acceptable  
    }
    // If the driver's speed exceeds the speed limit
    else {
        // Calculate the number of points to be assigned to the driver's license based on their speed
        const points = Math.floor((speed - speedLimit) / KmPerPoint);
        
        // If the driver has accumulated 12 or more points, their license is suspended
        if (points >= 12) {
            return 'licence suspended'; // Return 'licence suspended' indicating the license is suspended
        }
        // If the driver has fewer than 12 points, return the number of points
        else {
            return `${points} points`; // Return the number of points indicating the penalty but license is not suspended
        }
    }
}

// Testing the function with different speeds
console.log(lookAtSpeed(80)); // Should return '2 points' (10 km/h over the speed limit)
console.log(lookAtSpeed(60)); // Should return 'ok' (within the speed limit)
console.log(lookAtSpeed(50)); // Should return 'ok' (within the speed limit)
