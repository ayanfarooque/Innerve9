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
  name: {
    type: String,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true 
  },
  powerBackup: {
    type: Boolean,
    required: true
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
    type: [String],
    required: true
  },
  experience: {
    type: Number,
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
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  organName: {
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

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: string
  }, 
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    required: true
  }
});

const hospitalModel = mongoose.model("hospitals", HospitalSchema);
const doctorModel = mongoose.model("doctor", DoctorSchema);
const bloodModel = mongoose.model("blood", BloodSchema);
const organModel = mongoose.model("organ", OrganSchema);
const resourceModel = mongoose.model("resource", ResourceSchema);
const userModel = mongoose.model("user", UserSchema);

module.exports = {
  initDatabase,
  hospitalModel,
  doctorModel,
  bloodModel,
  organModel,
  resourceModel,
  userModel
};
