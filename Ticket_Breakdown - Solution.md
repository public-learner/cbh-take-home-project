# Ticket Breakdown Solution


## subticket_1

Description: Create a function that generates the unique string CustomeID from unique facility name  

Estimated Time: 40min  

Dependency: None  


Details:  

let generateCustomFacilityID = (facilityName: string) => string: { 
}

Approval rule

- Generate unique ID from unique facility name
- Shouldn't be guessed from customID the facility name, but should can be reversed

## subticket_2

Description: Update existing Facility table to have the new column named 'customID' using generateCustomFacilityID function
Estimated Time: 20 min
Dependency: subticket_1

## subticket_3

Description: Create a function that generates the unique string CustomID from unique facility ID and Agent ID
Estimated Time: 40min
Dependency: subticket_1

Details:
let generateCustomAgentID = (facilityID: string, AgentID: string) => string: {
}

Approval rule

- Generate unique customed ID from unique facility ID and Agent ID
- Customed ID should include the information related to both facility and Agent ID

## subticket_4

Description: Update existing Agent table to have the new column named 'customID' using generateCustomAgentID function
Estimated Time: 30 min
Dependency: subticket_2, subticket_3

## subticket_5

Description: Update the model part that uses two table's default ID to use customID, do the test
Estimated Time: 40 min
Dependency: subticket_4