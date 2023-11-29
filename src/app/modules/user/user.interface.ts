type TUser = {
    id: string;
    password: string;
    needsPassswordChange: boolean;
    role: 'admin' | 'student' | 'faculty';
    status: 'in-progress' | 'blokced';
    isDeleted : boolean;
}

export default TUser;