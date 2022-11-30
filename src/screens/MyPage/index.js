import React from 'react';
import { MyPageWrapper, MyPageProfile, MyPageContainer } from './style';
import { Grid } from '@mui/material';
import './style.css';
import Box from './Box';
import Profile from './Profile';

const MyPage = () => {
	return (
		<MyPageContainer>
			<MyPageProfile>
				<Profile />
			</MyPageProfile>
			<MyPageWrapper>
				<Box />
			</MyPageWrapper>
		</MyPageContainer>
	);
};

export default MyPage;
