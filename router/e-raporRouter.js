import express from "express";
import multer from "multer";
import eraporController from "../controller/e-raporController.js";
import biodataController from "../controller/biodataController.js";
import academicYearController from "../controller/academicYearController.js";
import quarterAcademicYearController from "../controller/quarterAcademicYearController.js";
import gradeClassController from "../controller/gradeClassController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.use(express.json());

// User
router.get("/", eraporController.getViewAuthUser);
router.get("/erapor", eraporController.getViewEraporUser);

// Admin
router.get("/admin", eraporController.getViewAuthAdminLogin);
router.get("/admin/dashboard", eraporController.getViewAdminDashboard);
router.get("/admin/biodata/all", biodataController.getViewAdminBiodata);
router.get("/admin/biodata/input", biodataController.getViewAdminBiodataInput);
router.post(
  "/admin/biodata/input",
  biodataController.postViewAdminBiodataInput
);
router.get(
  "/admin/biodata/import",
  biodataController.getViewAdminBiodataImport
);
router.post(
  "/admin/biodata/import",
  upload.single("file"),
  biodataController.postViewAdminBiodataImport
);
router.post("/admin/biodata/update", biodataController.updateDataAdminBiodata);
router.post("/admin/biodata/delete", biodataController.deleteDataAdminBiodata);
router.get("/admin/classroom/all", eraporController.getViewAdminDataKelas);
router.get("/admin/testscores", eraporController.getViewAdminNilaiUjian);
router.get("/admin/reportcard", eraporController.getViewAdminRapor);
router.get("/admin/setting", academicYearController.getPageAdminSetting);
router.post(
  "/admin/setting/academicyear/input",
  academicYearController.inputDataAcademicYear
);
router.post(
  "/admin/setting/academicyear/update",
  academicYearController.updateAcademicYear
);
router.post(
  "/admin/setting/academicyear/delete",
  academicYearController.deleteAcademicYear
);
router.get(
  "/admin/setting/quarteracademicyear",
  quarterAcademicYearController.getViewAdminSettingQuarterAcademicYear
);
router.post(
  "/admin/setting/quarteracademicyear/input",
  quarterAcademicYearController.addQuarterAcademicYear
);
router.post(
  "/admin/setting/quarteracademicyear/update",
  quarterAcademicYearController.updateQuarterAcademicYear
);
router.post(
  "/admin/setting/quarteracademicyear/delete",
  quarterAcademicYearController.deleteQuarterAcademicYear
);
//////////////
router.get(
  "/admin/setting/grade",
  gradeClassController.getViewAdminSettingGradeClass
);
router.get(
  "/admin/setting/classname",
  eraporController.getViewAdminPengaturanKelas
);
router.get(
  "/admin/setting/subject",
  eraporController.getViewAdminPengaturanMapel
);
router.get(
  "/admin/setting/username",
  eraporController.getViewAdminPengaturanUsername
);
router.get(
  "/admin/setting/password",
  eraporController.getViewAdminPengaturanPassword
);
router.get("/admin/logout", eraporController.getViewAdminLogout);

export default router;