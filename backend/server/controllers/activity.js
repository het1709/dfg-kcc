import dbQuery  from '../db/dbQuery';
import regeneratorRuntime from "regenerator-runtime";
import util from "util";

const getActivities = async (req, res, next) => {
  const { fatigue, platelets, pain, place} = req.query;
  const getActivityQuery = 'SELECT activity_id FROM login_form where (fatigue_level=$1 or fatigue_level=$2) and (platelets_level=$3 or platelets_level=$4) and (pain_level=$5 or pain_level=$6)';
  const getActivityDetailsQuery = 'SELECT * FROM activity where id=$1';
  console.log(`getLoginForm is called`);
  try {
    const { rows } = await dbQuery.query(getActivityQuery, [fatigue, 'any', platelets, 'any', pain, 'any']);
    console.log(`getActivities is called: ${rows}`);
    const dbResponseActivity = rows;
    if (!dbResponseActivity[0]) {
      return res.status(404).send('There are no activities');
    }

    var base_query = 'SELECT * FROM activity where id=$1';
    const base_array = [];
    base_array.push(dbResponseActivity[0].activity_id);
    
    for (var i = 1; i < dbResponseActivity.length; i++) {
      base_array.push(dbResponseActivity[i].activity_id);
      base_query = base_query + ' or id=$' + (i+1);
    }
    
    const result = await dbQuery.query(base_query, base_array);
    const dbResponseActivityDetails = result.rows;
    if (!dbResponseActivityDetails[0]) {
      return res.status(404).send('There are no activities');
    }
    return res.status(200).send(dbResponseActivityDetails);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send('Operation was not successful');
  }
};

export {
  getActivities
};