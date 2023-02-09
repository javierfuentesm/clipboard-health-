# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Add Custom Agent ID Field in the Database

### Acceptance Criteria:
A new field, "custom_agent_id" is added to the "Agents" table in the database.
The field should be able to accept alphanumeric characters with a maximum length of 20 characters.
The field should be nullable, to allow for Facilities who don't use custom agent IDs.
Estimated time effort: 2-3 hours

### Implementation Details:

Verify the database schema and make a backup.
Add a new field "custom_agent_id" of type VARCHAR with a maximum length of 20 characters to the "Agents" table.
Update the database schema and verify data consistency.
Write tests to verify that the new field is added correctly and can be queried as expected.


## Ticket 2: Retrieve Custom Agent IDs in getShiftsByFacility Function

### Acceptance Criteria:
The "getShiftsByFacility" function should return the "custom_agent_id" of each Agent, if it is available.
If the "custom_agent_id" is not available, the internal database id of the Agent should be returned.
The function should continue to return all other Shift metadata as before.
Estimated time effort: 1-2 hours

### Implementation Details:

Update the SQL query in the "getShiftsByFacility" function to include the "custom_agent_id" field in the SELECT statement, if it is available.
If the "custom_agent_id" is not available, retrieve the internal database id of the Agent.
Update the function to return the "custom_agent_id" or the internal database id as described in the acceptance criteria.
Write tests to verify that the function returns the expected data.


## Ticket 3: Use Custom Agent ID in generateReport Function

### Acceptance Criteria:
The "generateReport" function should use the "custom_agent_id" of each Agent, if it is available.
If the "custom_agent_id" is not available, the internal database id of the Agent should be used.
The report should continue to be generated in the same format as before.
Estimated time effort: 2-3 hours

### Implementation Details:

Update the "generateReport" function to use the "custom_agent_id" or the internal database id as described in the acceptance criteria.
Update the PDF template to include the "custom_agent_id" or the internal database id in the report.
Write tests to verify that the report is generated correctly and includes the expected data.


## Ticket 4: Implement UI for editing custom ids

### Acceptance Criteria:

A new section should be added to the Facility dashboard for editing custom ids for Agents
The section should display a list of all Agents associated with the Facility along with their current custom ids
The section should allow the Facility to edit the custom ids for each Agent
Validation should be implemented to ensure that the custom ids are unique for each Agent within the Facility
Time/Effort Estimate: 4 hours

### Implementation Details:

Create a new section in the Facility dashboard for editing custom ids
Implement the functionality to display a list of Agents and their custom ids
Implement the functionality to allow the Facility to edit the custom ids
Implement validation to ensure that the custom ids are unique for each Agent within the Facility


## Ticket 5: Update Documentation

### Acceptance Criteria:
The documentation is updated to reflect the changes made to the "getShiftsByFacility" and "generateReport" functions.
The documentation should describe the new "custom_agent_id" field and how it is used.
Estimated time effort: 1 hour

### Implementation Details:

Update the relevant documentation to reflect the changes made to the "getShiftsByFacility" and "generateReport" functions.
Update the documentation to describe the new "custom_agent_id" field and how it is used.