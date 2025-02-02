# 🏆 DApp Practice - NFT Minting & Smart Contract Interaction

## 📌 소개
DApp-Practice 프로젝트는 **MetaMask와 상호작용하는 프론트엔드**와 **Solidity 스마트 컨트랙트**를 포함한 **NFT 민팅 및 카운터 기능을 제공하는 블록체인 애플리케이션**입니다.  
React를 활용한 클라이언트와 Solidity 기반 스마트 컨트랙트를 결합하여, **블록체인과 프론트엔드의 연결을 학습하는 목적**으로 개발되었습니다.

---

## 🚀 주요 기능

### 🎨 NFT 민팅 기능
- MetaMask 지갑을 연결하고 사용자 계정을 확인
- OpenZeppelin의 ERC-721을 활용한 NFT 민팅 스마트 컨트랙트 (`MyNFT.sol`)
- 선택한 NFT 계약 주소로 새로운 NFT를 발행하고 지정된 주소로 전송

### 🔢 Counter 스마트 컨트랙트
- 블록체인 상에서 값을 저장하고 조작할 수 있는 간단한 Counter 기능 (`Counter.sol`)
- 값을 설정하고, 1씩 증가시키는 기능 제공

### 🔗 MetaMask 연동
- 사용자가 **MetaMask를 통해 이더리움 블록체인과 상호작용**할 수 있도록 구성
- 네트워크 변경 및 계정 변경 감지 기능 추가

---

## 🛠️ 기술 스택

### 📌 프론트엔드 (React)
- React.js
- MetaMask SDK (`@metamask/sdk-react`)
- Web3.js (`web3`)

### 📌 스마트 컨트랙트 (Solidity)
- Solidity (`^0.8.13`, `^0.8.22`)
- OpenZeppelin Contracts (`ERC721`, `Ownable`)

### 📌 블록체인 환경
- MetaMask
- Ethereum 네트워크

---

## 📂 프로젝트 구조
```
DApp-Practice/
├── client/          # React.js 기반 프론트엔드 DApp
│   ├── src/
│   │   ├── App.jsx  # MetaMask 연동 및 NFT 민팅 기능 구현
│   │   ├── abi.json # 스마트 컨트랙트 ABI 파일
│   ├── package.json
│   ├── ...
│
├── contracts/       # Solidity 스마트 컨트랙트
│   ├── Counter.sol  # 숫자 증가/설정이 가능한 간단한 컨트랙트
│   ├── MyNFT.sol    # ERC721 기반 NFT 컨트랙트
│   ├── ...
│
├── hardhat.config.js # Hardhat 설정 파일
└── README.md
```

---

## 🏆 배운 점 및 향후 개선 사항

### 📚 배운 점
- **MetaMask와 스마트 컨트랙트 연동**: MetaMask를 활용하여 이더리움 네트워크에 연결하고, 지갑 계정을 연동하는 과정을 익혔습니다.
- **React와 Web3.js를 활용한 블록체인 DApp 개발**: Web3.js를 통해 스마트 컨트랙트와 상호작용하는 프론트엔드를 구축하였습니다.
- **NFT 민팅 및 블록체인 상호작용 학습**: ERC-721 표준을 기반으로 NFT를 발행하고, 특정 주소로 전송하는 기능을 구현했습니다.
- **Hardhat을 활용한 스마트 컨트랙트 배포**: Hardhat을 사용하여 스마트 컨트랙트를 로컬 및 테스트넷에 배포하는 방법을 익혔습니다.

