const { getContractInstance } = require('./contracts');

const _getDAOAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.dao();
};

const _getSavETHVaultAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.savETHVault();
};

const _getFeesAndMEVPoolAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakingFundsVault();
};

const _getStakehouseTicker = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakehouseTicker();
};

const _isWhitelistingEnabled = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.enableWhitelisting();
};

const _isNodeRunnerWhitelisted = async (signer, liquidStakingManagerAddress, nodeRunnerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isNodeRunnerWhitelisted(
        nodeRunnerAddress
    );
};

const _getSmartWalletRepresentative = async (signer, liquidStakingManagerAddress, smartWalletAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletRepresentative(
        smartWalletAddress
    );
};

module.exports = {
    _getDAOAddress,
    _getSavETHVaultAddress,
    _getFeesAndMEVPoolAddress,
    _getStakehouseTicker,
    _isWhitelistingEnabled,
    _isNodeRunnerWhitelisted,
    _getSmartWalletRepresentative
}
