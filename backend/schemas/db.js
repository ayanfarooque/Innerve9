const mongoose = require('mongoose');
const MONGOOSE_URI = "mongodb://localhost:27017/Innerve9";

const initDatabase = async () => {
  mongoose.connect(MONGOOSE_URI)
  .then(() => {
    console.log(`Connected to Database`);
  })
  .catch((_error) => {
    console.log(`Error connecting to database: ${_error}`);
  });
};

const HospitalSchema = new mongoose.Schema({
  hid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ""
  },
  beds: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    default: ""
  },
  powerBackup: {
    type: Boolean,
    default: false
  },
});

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  speciality: {
    type: String,
    required: true
  },
  hospitalId: {
    type: [mongoose.Schema.ObjectId],
    default: [],
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  }
});

const BloodSchema = new mongoose.Schema({
  bloodBankId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const OrganSchema = new mongoose.Schema({
  hospitalid: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  organname: {
    type: String,
    required: true
  }
});

const ResourceSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  resourceName: {
    type: String,
    required: true
  }
});

const OxygenSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: String
  }, 
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    default: ""
  }
});

const BloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  apos: {
    type: Number,
    default: 0
  },
  aneg: {
    type: Number,
    default: 0
  },
  bpos: {
    type: Number,
    default: 0
  },
  bneg: {
    type: Number,
    default: 0
  },
  abpos: {
    type: Number,
    default: 0
  },
  abneg: {
    type: Number,
    default: 0
  },
  opos: {
    type: Number,
    default: 0,
  },
  oneg: {
    type: Number,
    default: 0
  },
  adminEmail: {
    type: String,
    required: true
  },
  adminPassword: {
    type: String,
    required: true
  },
  bid: {
    type: String,
    required: true
  }
});


const hospitalModel = mongoose.model("hospitals", HospitalSchema);
const doctorModel = mongoose.model("doctors", DoctorSchema);
const bloodModel = mongoose.model("blood", BloodSchema);
const organModel = mongoose.model("organs", OrganSchema);
const resourceModel = mongoose.model("resources", ResourceSchema);
const oxygenModel = mongoose.model("oxygens", OxygenSchema);
const bloodBankModel = mongoose.model("bloodBanks", BloodBankSchema);
const userModel = mongoose.model("user", UserSchema);

module.exports = {
  initDatabase,
  hospitalModel,
  doctorModel,
  bloodModel,
  organModel,
  resourceModel,
  oxygenModel,
  bloodBankModel,
  userModel
};
