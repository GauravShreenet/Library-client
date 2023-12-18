import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAction } from '../../pages/user_signup/userAction';
import { UserLayout } from '../../component/layout/UserLayout';
import { UsersTable } from '../../component/students/UsersTable';
import { Container } from 'react-bootstrap';

export const Admins = () => {
    const { user } = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        user?.role === "admin" && dispatch(getAllUserAction())
    }, [user?.role, dispatch])

    return (
        user?.role === 'admin' ? (<UserLayout title="admins">
            <Container>
                <UsersTable role="admin" />
            </Container>
        </UserLayout>)
            :
            (
                <h1>Unauthorize</h1>
            )
    )
}
