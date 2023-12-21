const sequelize = require("../config/conexion");

const Medicion = require("../models/medicion.model");

// VER DATA
async function medicionAll() {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findAll();
  return query;
}

// FILTRAR DATA
async function medicionFilter(id) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findOne({
    where: {
      id: id,
    },
  });

  return query;
}

// FILTRAR DATA 2
async function dataMedicionFilter(id, user) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findAll({
    where: {
      id : id,
      user_crea : user
   }, 
   
  });

  return query;
}

// FILTRAR DATA 3
async function dataMedicionFilterDos(id_invest, user) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findAll({
    where: {
      id_invest : id_invest,
      user_crea : user
   }, 
  });
  return query;
}

// CREAR
async function medicionCreated(
  id_invest,
  hora,
  nro_visitantes,
  nro_facturas,
  user_crea,
  user_mod
) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.create({
    id_invest: id_invest,
    hora: hora,
    user_crea: user_crea,
    user_mod: user_mod,
    nro_visitantes: nro_visitantes,
    nro_facturas: nro_facturas,
  });

  return query;
}
// ACTUALIZAR
async function medicionUpdate(
  id,
  id_invest,
  hora,
  nro_visitantes,
  nro_facturas,
  user_crea,
  user_mod
) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.update(
    {
      id_invest: id_invest,
      hora: hora,
      user_crea: user_crea,
      user_mod: user_mod,
      nro_visitantes: nro_visitantes,
      nro_facturas: nro_facturas,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return query;
}

// ELIMINAR DATA
async function medicionDelete(id) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.destroy({
    where: {
      id: id,
    },
  });

  return query;
}

async function medicionFilterTrue(user) {
  let rta = await sequelize.query(`
  SELECT * 
  FROM dkval_Merge.fat_INVES_MEDICION_Ds  t0
  WHERE user_crea = '${user}' 
  AND fec_crea = (SELECT Max(fec_crea) FROM dkval_Merge.fat_INVES_MEDICION_Ds t1 
  WHERE t1.user_crea = '${user}')`);
  return rta[0];
}

module.exports = {
  medicionAll,
  medicionCreated,
  medicionFilter,
  medicionUpdate,
  medicionDelete,
  dataMedicionFilter,
  dataMedicionFilterDos,
  medicionFilterTrue
};
