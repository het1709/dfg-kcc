import dbQuery from '../db/dbQuery';

const updateUserFlag = async (user_email, flag_to_update, new_val) => {    
    if (flag_to_update !== 'init_meeting_done' && flag_to_update !=='phys_form_submitted') {
        console.error("flag_to_update must be either 'init_meeting_done' or 'phys_form_submitted'");
        return -1;
    }

    if (typeof new_val !== 'boolean') {
        console.error("new_val must be of type boolean");
        return -1;
    }

    const base_query = 'UPDATE users SET $1 = $2 WHERE email = $3';
    const vals = [flag_to_update, new_val, user_email];

    try {
        await dbQuery.query(base_query, vals);
        return 0;
    } catch (err) {
        console.error("Error updating the DB");
        console.error(err);
        return -2;
    }
}

const updateUserAccess = async (user_email, new_access_type) => {
    if (!['none', 'limited', 'full'].includes(new_access_type)) {
        console.error("new_access_type must be one of 'none', 'limited', or 'full'");
        return -1;
    }
    const base_query = 'UPDATE users SET access_type = $1 WHERE email = $2';
    const vals = [new_access_type, user_email];

    try {
        await dbQuery.query(base_query, vals);
        return 0;
    } catch (err) {
        console.error("Error updating the DB");
        console.error(err);
        return -2;
    }
}


const updateUserGodinScore = async (user_email, new_score) => {
    if (typeof new_score !== "number") {
        console.error("new_score must be an integer");
        return -1;
    }
    const base_query = 'UPDATE users SET godin_score = $1 WHERE email = $2';
    const vals = [new_score, user_email];

    try {
        await dbQuery.query(base_query, vals);
        return 0;
    } catch (err) {
        console.error("Error updating the DB");
        console.error(err);
        return -2;
    }
}

export {
    updateUserAccess,
    updateUserFlag,
    updateUserGodinScore
}