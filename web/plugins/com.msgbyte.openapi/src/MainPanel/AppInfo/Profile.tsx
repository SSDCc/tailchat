import { useOpenAppInfo } from '../context';
import React from 'react';
import { FullModalField, Divider } from '@capital/component';
import { SecretValue } from '../../components/SecretValue';
import './Profile.less';

/**
 * 基础信息
 */
const Profile: React.FC = React.memo(() => {
  const { appId, appSecret } = useOpenAppInfo();

  return (
    <div>
      <h2>应用凭证</h2>

      <div>
        <FullModalField title="App ID" content={appId} />
        <FullModalField
          title="App Secret"
          content={<SecretValue>{appSecret}</SecretValue>}
        />
      </div>

      <Divider />

      <h2>基本信息</h2>

      {/* TODO */}
    </div>
  );
});
Profile.displayName = 'Profile';

export default Profile;
