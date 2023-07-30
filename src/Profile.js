import React from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

import './Profile.css'; // Import CSS file for styling (create this file separately)

export function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = (connector) => {
    connect({ connector });
  };

  return (
    <div className="profile-container">
      {isConnected ? (
        <>
          <div className="avatar-container">
            <img src={ensAvatar} alt="ENS Avatar" className="avatar" />
          </div>
          <div className="info">
            {ensName ? (
              <div className="name">{`${ensName} (${address})`}</div>
            ) : (
              <div className="address">{address}</div>
            )}
            <div className="connected-to">{`Connected to ${connector.name}`}</div>
            <button className="disconnect-btn" onClick={disconnect}>
              Disconnect
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="connectors-container">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => handleConnect(connector)}
                className={`connector-btn ${!connector.ready ? 'unsupported' : ''}`}
                disabled={!connector.ready}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
              </button>
            ))}
          </div>
          {error && <div className="error-message">{error.message}</div>}
        </>
      )}
    </div>
  );
}

export default Profile;
