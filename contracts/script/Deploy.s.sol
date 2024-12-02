// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Script, console} from "forge-std/Script.sol";
import {MyNFT} from "../src/MyNFT.sol";

contract Deploy is Script {
    function run() external {
        // 배포 트랜잭션 전송
        vm.startBroadcast();
        MyNFT token = new MyNFT(msg.sender);
        vm.stopBroadcast();

        console.log("Contract deployed to:", address(token));
    }
}

