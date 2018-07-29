# Smart-contract for Voteo - Decentralized voting app for NEO blockchain
smart-contract v1

In order to build and test this smart-contract local NEO blockchain needs to be set-up at first.

Visit https://github.com/nos/nos-local for guide on how to do this.

Once up and running contract can be built and deployed by following commands:

```
open wallet ./neo-privnet.wallet
build /contractVoteo.py
import contract /contractVoteo.avm 0710 07 True False
```

Now, smart-contract is deployed on your local NEO blockchain, you received
contract hash with which you can try to use any of the following supported invoke methods:

## RegisterPoll

Method for registering public or private poll

Input params: user_address, poll_data, address_of_recipient1, address_of_recipient2, address_of_recipient3,...

Return values: ID of created poll

Examples:

Register private poll for specific addresses:
```
testinvoke contract_hash RegisterPoll ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6'.'questionsDATA','address_of_john','address_of_mike']
```
Register public poll (do not send any recipients addresses):
```
testinvoke contract_hash RegisterPoll ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6'.'']
```

## GetPollById

Method for getting poll info by poll ID

Input params: user_address, poll_id

Return values: poll_data

Example:
```
testinvoke contract_hash GetPollById ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6','42']
```

## GetPublicAll

Method for getting IDs of all public polls

Input params: user_address

Return values: list of IDs

Example:
```
testinvoke contract_hash GetPublicAll ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6']
```

## GetAssignedPolls

Method for getting all polls assigned to the current user

Input params: user_address

Return values: list of IDs

Example:
```
testinvoke contract_hash GetAssignedPolls ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6']
```

## GetAssignedPollsByAddress

Method for getting all polls assigned to the specified user

Input params: user_address, address_we_want_to_check

Return values: list of IDs

Example:
```
testinvoke contract_hash GetAssignedPollsByAddress ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6','address_of_mike']
```

## GetCreatedPolls

Method for getting all polls created by current user

Input params: user_address

Return values: list of IDs

Example:
```
testinvoke contract_hash GetCreatedPolls ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6']
```

## GetLatestId

Method for getting ID of last created poll, for now serves as counter for number
of polls created

Input params: user_address

Return values: ID of last created poll

Example:
```
testinvoke contract_hash GetLatestId ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6']
```

## RegisterVote

Method for voting in the chosen poll

Input params: user_address, vote_data, poll_id

Return values: Success or failure of voting

Example:
```
testinvoke contract_hash RegisterVote ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6','answersDATA','42']
```

## CheckVoteByIdAndAddress

Method for getting data on how specific address voted on specific vote

Input params: user_address, poll_id, address_we_want_to_check

Return values: vote_data

Example:
```
testinvoke contract_hash CheckVoteByIdAndAddress ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6','42','address_of_mike']
```

## GetVoteListById

Method for getting all addresses that already participated in specific poll

Input params: user_address, poll_id

Return values: list of addresses

Example:
```
testinvoke contract_hash GetVoteListById ['AQjQjyrjWa19B9X2RNAA1YHFZxkSmdSQE6','42']
```

##

This are all invoke methods supported in version 1.0 of smart-contract.

Keep in mind that for all calls first parameter is always your address.


Version 2.0 coming soon. Stay tuned.
