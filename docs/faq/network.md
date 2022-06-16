---
title: Networks
description: LUKSO Networks Frequently Asked Questions
sidebar_position: 3
---

# Frequently Asked Questions

## GENERAL

### When will the LUKSO Mainnet be launched?

2022 is the planned launch date. You can find the latest update in our [Medium article](https://medium.com/lukso/an-update-on-the-road-to-mainnet-48d39ce411d7).

### I found a bug. Where can I report it?

If you can, create a GitHub issue in the related project's repository. Otherwise, please send us a message on our [Discord](https://discord.gg/lukso) server.

## NETWORK

### What are the expected block and epoch times?

L16 will run at 6s per slot, and each epoch will contain 32 slots.
We are currently determining values for mainnet.

### What is the expected tx/second?

L16 will start with a 60-80M GAS limit, allowing node machines with 4 cores and 8-16 GB RAM to work well.

### Are there any changes on the LUKSO network compared to Ethereum 2.0? What are those changes?

We want to maximize ETH2 compatibility. For now, we expect the consensus engines to remain similar. Our future research and development will include

1. withdraw functionality
2. sharding
3. data availability

### Which execution and consensus clients are available for LUKSO?

Currenty we use Geth for execution and Prysm for consensus.

### Ethereum supports multiple clients. Will LUKSO support other clients in the future?

The potential to be compatible with all clients is one advantage of staying close to ETH2 development. Currently, we are testing Lighthouse and will expand to Teku soon. Ideally, we will be compatible with all clients.

### Will Lukso continue to follow Ethereum updates, or will future development have a novel approach, like the Pandora/Vanguard/Orchestrator clients?

There could be changes after mainnet, and Ethereum's developmental direction will dictate how much we need to deviate and execute our own unique ideas. Regardless, it will be a balancing act between maintaining compatibility with Ethereum and providing functionality specific to LUKSO's vision.

### Can I stake my tokens without being a validator?

LUKSO uses a proof-of-stake (PoS) consensus mechanism, which requires the operation of a node for staking.
There will likely be staking pools, though this reduces decentralization and remove the option to maintain custody of your private keys, which is not ideal for a highly decentralized network.

### Is LUKSO going to implement the EIP-1559 standard?

[EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) is planned. A finally decision will be made before mainnet launch.

## NODE

### Will lower latency positively influence my rewards?

There are no extra rewards for being very quick. A validator has exactly 6 seconds to vote on a proposed block. Two scenarios can cause a validator to miss that slot: 

1. The validator's chain is not synced with the canonical head. 
2. The validator needed more than 6 seconds to propose the block. 

### How do I maximize peers on my node?

There are settings in the node configuration to maximize peers, but more peers increase bandwidth usage and do not necessarily lead to benefits.

Normally, a node will connect to max peers, but each peer has an evaluation step that will judge if the node is "worthy." Otherwise, it will say "goodbye." You can check the logs for goodbye messages.

### Why are my peers on the execution and consensus stats websites different?

With the Bellatrix fork, Geth must follow the beacon chain, and it will sync by itself only to the final epoch. This means it is not necessarily 
important how many peers the execution node has after reaching finality.

Also, there is no mechanism linking consensus peers and execution node peers—they are not necessarily the same.

### What ports must be open on a node?

It would be best if you opened the following ports and protocols in the network to run your node correctly.

```
tcp:30303
tcp:13000
udp:12000
udp:30303
```
### How can I open my ports on my node machine? Can you describe it for Mac and Linux
```
# Linux
Using the lukso-cli will open the ports for you automatically.
This is due to the underlying docker-compose configuration running 
in "host" mode. If you have a firewall configured, please allow
traffic for the above mentioned ports.
```

:::info
NOTE: Make sure you also forward those ports in your router.
:::

## VALIDATOR

### What is the minimum deposit for a validator?

The minimum deposit amount has not been announced. It must be high enough to incentivize validators to maintain their nodes, and a low cost can put the security and stability of the network at risk. A decision will be made prior to mainnet launch.

### When will it be possible to withdraw your LYX from your validator and how?

Eth2.0 planned the withdraw functionality with phase 1. 
We are observing this topic very closely. Ideally
we are satisfied with the solution. But as already 
stated we might propose our own one.

### Is there a minimum of validators you need to run?

No, it is only required that you run one.

### Is there a maximum limit on how many validators one node can run, regarding decentralization?

It is not given exactly. We were running a node with 60 
validators. Next to block proposals the validator node has 
additonal duties like voting on a block. It might get quite 
crowded on one slot. But it also depends on the size of 
the validators in total. If there are many validators out 
there the duties might be very low for a node.

### Is there an advantage to splitting validators across multiple nodes instead of running all validators on one node?

Example: One node with 200 validators or two nodes with 100 validators each.

This is a optimisation problem which goes against 
a lot of factors: Price per node. Total Validator Density. 
It can be reasonable to run 200 validators in one node but 
we don't recommend it.

### Do you receive higher returns If you deposit more than 32 LYX in a validator?

No. 

### Can I start extra validators with the rewards I'm getting on my validator balance?

This goes back to the question if withdraw is implemented.

### Can you explain the process for withdrawing and selling rewards, while still keeping the validator running?

Right now this is not available.

### How should the logs look in each case to have certainty everything runs smoothly?

We developed a sense for beautiful logs over the years and would 
recommend either to get used to them first by trying to understand 
and eventually asking questions. Also, we will provide explanations 
for different warnings and errors in the future. But ideally the
logs can be omitted - other tools should provide visibility 
(Grafana,Explorers,...)

### Is it possible to check if your validator is running correctly and what the rewards are without using Grafana/Prometheus?

You can use the CLI. We are improving the command:

```
lukso network validator describe
```

## SECURITY

### Can my node location be tracked?

Yes, as you expose your IP.
