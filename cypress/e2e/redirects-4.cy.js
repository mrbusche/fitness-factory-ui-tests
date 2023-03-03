describe('Test redirects', () => {
  it('/Home/Item/3530/SDR530SET/GDR44_Rubber_Dumbbell_Package_5-30_lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3530/SDR530SET/GDR44_Rubber_Dumbbell_Package_5-30_lbs_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3530/sdr530set/gdr44_rubber_dumbbell_package_5-30_lbs_/');
  })
  it('/Home/Item/3533/GPR378P300/Body-Solid_Power_Rack_300_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3533/GPR378P300/Body-Solid_Power_Rack_300_Package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3533/gpr378p300/body-solid_power_rack_300_package/');
  })
  it('/Home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Bench_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Bench_Package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3535/gdib46lp8/body-solid_powercenter_bench_package/');
  })
  it('/Home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Package_with_Weight_Sets', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Package_with_Weight_Sets/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3535/gdib46lp8/body-solid_powercenter_package_with_weight_sets/');
  })
  it('/home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Package_with_Weight_Sets', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3535/GDIB46LP8/Body-Solid_PowerCenter_Package_with_Weight_Sets/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3535/gdib46lp8/body-solid_powercenter_package_with_weight_sets/');
  })
  it('/home/Item/3556/PPB32P2/Powerline_Preacher_Bench_Package', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3556/PPB32P2/Powerline_Preacher_Bench_Package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3556/ppb32p2/powerline_preacher_bench_package/');
  })
  it('/Home/Item/3560/SDX530SETB/5-30_lb__Hex_Dumbbell_Package_with_Rack_and_Weight_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3560/SDX530SETB/5-30_lb__Hex_Dumbbell_Package_with_Rack_and_Weight_Bench/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/dumbbells/');
  })
  it('/home/item/3623/opb/100_lb__olympic_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/3623/opb/100_lb__olympic_plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3623/opb/100_lb__olympic_plate/');
  })
  it('/home/item/3625/opb45/45_pound_olympic_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/3625/opb45/45_pound_olympic_plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3625/opb45/45_pound_olympic_plate/');
  })
  it('/Home/Item/3625/OPB45/45_Pound_Olympic_Plate', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3625/OPB45/45_Pound_Olympic_Plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3625/opb45/45_pound_olympic_plate/');
  })
  it('/home/item/3667/ost400s/400_lb__steel_grip_olympic_set', () => {
    cy.visit('https://fitnessfactory.com/home/item/3667/ost400s/400_lb__steel_grip_olympic_set/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3667/ost400s/400_lb__steel_grip_olympic_set/');
  })
  it('/Home/Item/3675/SDX2/2_lb__Hex_Dumbbell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3675/SDX2/2_lb__Hex_Dumbbell/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3675/sdx2/2_lb__hex_dumbbell/');
  })
  it('/Home/Item/3697/DLEC-S/DLEC_Station_with_200lb__Stack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3697/DLEC-S/DLEC_Station_with_200lb__Stack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3697/dlec-s/dlec_station_with_200lb__stack/');
  })
  it('/home/item/3697/dlec-s/dlec_station_with_200lb__stack/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3697/dlec-s/dlec_station_with_200lb__stack/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3697/dlec-s/dlec_station_with_200lb__stack/service=/');
  })
  it('/Home/Item/3746/BSTSB65/Exercise_Stability_Ball_65cm', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3746/BSTSB65/Exercise_Stability_Ball_65cm/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3746/bstsb65/exercise_stability_ball_65cm/');
  })
  it('/home/item/3761/bstmb/body-solid_medicine_ball_10lb_', () => {
    cy.visit('https://fitnessfactory.com/home/item/3761/bstmb/body-solid_medicine_ball_10lb_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3761/bstmb/body-solid_medicine_ball_10lb_/');
  })
  it('/home/item/3765/bstdmb6/6lb__dual_grip_medicine_ball', () => {
    cy.visit('https://fitnessfactory.com/home/item/3765/bstdmb6/6lb__dual_grip_medicine_ball/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3765/bstdmb6/6lb__dual_grip_medicine_ball/');
  })
  it('/home/item/3766/bstdmb/8lb__dual_grip_medicine_ball', () => {
    cy.visit('https://fitnessfactory.com/home/item/3766/bstdmb/8lb__dual_grip_medicine_ball/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3766/bstdmb/8lb__dual_grip_medicine_ball/');
  })
  it('/Home/Item/3771/BSTDMB18/18lb__Dual_Grip_Medicine_Ball', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3771/BSTDMB18/18lb__Dual_Grip_Medicine_Ball/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3771/bstdmb18/18lb__dual_grip_medicine_ball/');
  })
  it('/Home/Item/3772/BSTDMB20/20lb__Dual_Grip_Medicine_Ball', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3772/BSTDMB20/20lb__Dual_Grip_Medicine_Ball/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3772/bstdmb20/20lb__dual_grip_medicine_ball/');
  })
  it('/home/item/3812/slc400g/2/proclub_leg_curl_210lb__stack', () => {
    cy.visit('https://fitnessfactory.com/home/item/3812/slc400g/2/proclub_leg_curl_210lb__stack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3812/slc400g/2/proclub_leg_curl_210lb__stack/');
  })
  it('/home/Item/3836/ETE12/Ekho_TE-12_Transmitter_with_Elastic_Strap', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3836/ETE12/Ekho_TE-12_Transmitter_with_Elastic_Strap/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3836/ete12/ekho_te-12_transmitter_with_elastic_strap/');
  })
  it('/Home/Item/3844/OB86PBG/Body-Solid_USA_7__Olympic_Barbell_-_Gold', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3844/OB86PBG/Body-Solid_USA_7__Olympic_Barbell_-_Gold/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3844/ob86pbg/body-solid_usa_7__olympic_barbell_-_gold/');
  })
  it('/home/item/3845/ob86pbs/body-solid_silver_olympic_bar__unconditional_warranty', () => {
    cy.visit('https://fitnessfactory.com/home/item/3845/ob86pbs/body-solid_silver_olympic_bar__unconditional_warranty/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3845/ob86pbs/body-solid_silver_olympic_bar__unconditional_warranty/');
  })
  it('/Home/Item/3846/OB86LPB/Body-Solid_USA_7__Rebel_Olympic_Barbell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3846/OB86LPB/Body-Solid_USA_7__Rebel_Olympic_Barbell/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3846/ob86lpb/body-solid_usa_7__rebel_olympic_barbell/');
  })
  it('/Home/Item/3846/OB86LPB/The_Body-Solid_Rebel_Bar', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3846/OB86LPB/The_Body-Solid_Rebel_Bar/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3846/ob86lpb/the_body-solid_rebel_bar/');
  })
  it('/home/item/3923/pfhgh/the_great_home_gym_handbook', () => {
    cy.visit('https://fitnessfactory.com/home/item/3923/pfhgh/the_great_home_gym_handbook/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3923/pfhgh/the_great_home_gym_handbook/');
  })
  it('/home/Item/3925/PFBARH/The_Great_Barbell_Handbook', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3925/PFBARH/The_Great_Barbell_Handbook/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3925/pfbarh/the_great_barbell_handbook/');
  })
  it('/Home/Item/3938/OB72A15/Body-Solid_15lb__Lightweight_Olympic_Barbell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3938/OB72A15/Body-Solid_15lb__Lightweight_Olympic_Barbell/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3938/ob72a15/body-solid_15lb__lightweight_olympic_barbell/');
  })
  it('/home/item/3939/e300p3/e300_elliptical_trainer_with_free_accessories/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3939/e300p3/e300_elliptical_trainer_with_free_accessories/service=/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3939/e300p3/e300_elliptical_trainer_with_free_accessories/service=/service=/');
  })
  it('/home/item/3940/e400/endurance_e400_center_drive_elliptical_trainer/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/3940/e400/endurance_e400_center_drive_elliptical_trainer/service=/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3940/e400/endurance_e400_center_drive_elliptical_trainer/service=/adeasel.com');
  })
  it('/home/item/3941/e5000/endurance_e5000_premium_center_drive_elliptical/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3941/e5000/endurance_e5000_premium_center_drive_elliptical/service=/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3941/e5000/endurance_e5000_premium_center_drive_elliptical/service=/service=/');
  })
  it('/home/item/3942/bfe1/best_fitness_elliptical_trainer_e1/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3942/bfe1/best_fitness_elliptical_trainer_e1/service=/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3942/bfe1/best_fitness_elliptical_trainer_e1/service=/service=/');
  })
  it('/Home/Item/3943/RF34B/Body-Solid_Tools_Short_Floor_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3943/RF34B/Body-Solid_Tools_Short_Floor_Mat/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3943/rf34b/body-solid_tools_short_floor_mat/');
  })
  it('/Home/Item/3953/SACT680/SportsArt_Treadmill_T680', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3953/SACT680/SportsArt_Treadmill_T680/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3953/sact680/sportsart_treadmill_t680/');
  })
  it('/Home/Item/3989/MB504/Diamond_Grip_Tricep_Handle', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3989/MB504/Diamond_Grip_Tricep_Handle/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3989/mb504/diamond_grip_tricep_handle/');
  })
  it('/home/item/3991/p1lpx/p1x_home_gym_with_leg_press', () => {
    cy.visit('https://fitnessfactory.com/home/item/3991/p1lpx/p1x_home_gym_with_leg_press/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3991/p1lpx/p1x_home_gym_with_leg_press/');
  })
  it('/home/Item/4019/KPOLOM/Kettler_Polo_M_Upright_Bike', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4019/KPOLOM/Kettler_Polo_M_Upright_Bike/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4019/kpolom/kettler_polo_m_upright_bike/');
  })
  it('/Home/Item/4068/BSTWV20/Body-Solid_Weight_Vest_20lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4068/BSTWV20/Body-Solid_Weight_Vest_20lbs_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4068/bstwv20/body-solid_weight_vest_20lbs_/');
  })
  it('/Home/Item/4069/BSTWV40/Body-Solid_Weight_Vest_40lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4069/BSTWV40/Body-Solid_Weight_Vest_40lbs_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4069/bstwv40/body-solid_weight_vest_40lbs_/');
  })
  it('/home/item/4094/obp/15_lb__black_bumper_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/4094/obp/15_lb__black_bumper_plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4094/obp/15_lb__black_bumper_plate/');
  })
  it('/home/item/4099/fde720/first_degree_evolution_series_e720_cycle_xt', () => {
    cy.visit('https://fitnessfactory.com/home/item/4099/fde720/first_degree_evolution_series_e720_cycle_xt/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/first-degree/');
  })
  it('/home/item/4107/gmr10/body-solid_medicine_ball_rack', () => {
    cy.visit('https://fitnessfactory.com/home/item/4107/gmr10/body-solid_medicine_ball_rack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4107/gmr10/body-solid_medicine_ball_rack/');
  })
  it('/home/Item/4110/9BGT500/Bodyguard_T500_Treadmill_Floor_Model', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4110/9BGT500/Bodyguard_T500_Treadmill_Floor_Model/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4110/9bgt500/bodyguard_t500_treadmill_floor_model/');
  })
  it('/home/item/4124/spteglide/spirit_cg800_e-glide', () => {
    cy.visit('https://fitnessfactory.com/home/item/4124/spteglide/spirit_cg800_e-glide/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4124/spteglide/spirit_cg800_e-glide/');
  })
  it('/Home/Item/4226/GFR500/Body-Solid_GFR500_Commercial_Fitness_Bar_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4226/GFR500/Body-Solid_GFR500_Commercial_Fitness_Bar_Rack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4226/gfr500/body-solid_gfr500_commercial_fitness_bar_rack/');
  })
  it('/home/item/4227/gdkr50/body-solid_short_kettlebell_rack', () => {
    cy.visit('https://fitnessfactory.com/home/item/4227/gdkr50/body-solid_short_kettlebell_rack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4227/gdkr50/body-solid_short_kettlebell_rack/');
  })
  it('/home/item/4267/ccorewar/war_machine__rotational_bodyweight_training_system', () => {
    cy.visit('https://fitnessfactory.com/home/item/4267/ccorewar/war_machine__rotational_bodyweight_training_system/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4267/ccorewar/war_machine__rotational_bodyweight_training_system/');
  })
  it('/Home/Item/4290/GS348Q/Body-Solid_Series_7_Smith_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4290/GS348Q/Body-Solid_Series_7_Smith_Machine/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4290/gs348q/body-solid_series_7_smith_machine/');
  })
  it('/home/item/4290/gs348q/body-solid_series_7_smith_machine', () => {
    cy.visit('https://fitnessfactory.com/home/item/4290/gs348q/body-solid_series_7_smith_machine/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4290/gs348q/body-solid_series_7_smith_machine/');
  })
  it('/Home/Item/4307/PVKC83X/Powerline_PVKC83X_Vertical_Knee_Raise_Pull_Up', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4307/PVKC83X/Powerline_PVKC83X_Vertical_Knee_Raise_Pull_Up/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4307/pvkc83x/powerline_pvkc83x_vertical_knee_raise_pull_up/');
  })
  it('/Home/Item/4311/SMR1000/Pro_ClubLine_Multi_Power_Rack_by_Body-Solid', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4311/SMR1000/Pro_ClubLine_Multi_Power_Rack_by_Body-Solid/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4311/smr1000/pro_clubline_multi_power_rack_by_body-solid/');
  })
  it('/Home/Item/4311/SMR1000/Pro_ClubLine_Multi_Power_Rack_SMR1000_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4311/SMR1000/Pro_ClubLine_Multi_Power_Rack_SMR1000_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4311/smr1000/pro_clubline_multi_power_rack_smr1000_/');
  })
  it('/Home/Item/4312/SCC1200G/Pro_ClubLine_SCC1200G_Cable_Crossover', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4312/SCC1200G/Pro_ClubLine_SCC1200G_Cable_Crossover/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4312/scc1200g/pro_clubline_scc1200g_cable_crossover/');
  })
  it('/home/item/4312/scc1200g/pro_clubline_scc1200g_cable_crossover/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4312/scc1200g/pro_clubline_scc1200g_cable_crossover/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4312/scc1200g/pro_clubline_scc1200g_cable_crossover/service=/');
  })
  it('/Home/Item/4313/VDRA30-PACK/Body-Solid_VDRA30_Package_with_20_Accessories', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4313/VDRA30-PACK/Body-Solid_VDRA30_Package_with_20_Accessories/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4313/vdra30-pack/body-solid_vdra30_package_with_20_accessories/');
  })
  it('/home/item/4313/vdra30-pack/body-solid_vdra30_package_with_20_accessories/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4313/vdra30-pack/body-solid_vdra30_package_with_20_accessories/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4313/vdra30-pack/body-solid_vdra30_package_with_20_accessories/service=/');
  })
  it('/Home/Item/4315/GMR10-PACK/Body-Solid_Vertical_Medicine_Ball_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4315/GMR10-PACK/Body-Solid_Vertical_Medicine_Ball_Package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4315/gmr10-pack/body-solid_vertical_medicine_ball_package/');
  })
  it('/home/item/4317/gdib46lp4/body-solid_powercenter_bench_package_with_lat/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4317/gdib46lp4/body-solid_powercenter_bench_package_with_lat/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4317/gdib46lp4/body-solid_powercenter_bench_package_with_lat/service=/');
  })
  it('/Home/Item/4319/BFCT1/Best_Fitness_BFCT1_Elliptical_Cross_Trainer', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4319/BFCT1/Best_Fitness_BFCT1_Elliptical_Cross_Trainer/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4319/bfct1/best_fitness_bfct1_elliptical_cross_trainer/');
  })
  it('/Home/Item/4320/8BFSB5/Best_Fitness_Training_Cycle_with_Chain_Drive-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4320/8BFSB5/Best_Fitness_Training_Cycle_with_Chain_Drive-Refurbished/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4320/8bfsb5/best_fitness_training_cycle_with_chain_drive-refurbished/');
  })
  it('/Home/Item/4320/BFSB5/Best_Fitness_Indoor_Training_Cycle_with_Chain_Drive', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4320/BFSB5/Best_Fitness_Indoor_Training_Cycle_with_Chain_Drive/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4320/bfsb5/best_fitness_indoor_training_cycle_with_chain_drive/');
  })
  it('/Home/Item/4320/BFSB5/SB5__Indoor_Cycle', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4320/BFSB5/SB5__Indoor_Cycle/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4320/bfsb5/sb5__indoor_cycle/');
  })
  it('/home/item/4339/mcgpkg1/muscle_craft_gym_package', () => {
    cy.visit('https://fitnessfactory.com/home/item/4339/mcgpkg1/muscle_craft_gym_package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4339/mcgpkg1/muscle_craft_gym_package/');
  })
  it('/Home/Item/4373/SPRAR/SPRI_Xerings_-_5_Sizes/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4373/SPRAR/SPRI_Xerings_-_5_Sizes/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
  })
  it('/Home/Item/4379/SPRESC/SPRI_Xercuffs_-__4_Sizes', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4379/SPRESC/SPRI_Xercuffs_-__4_Sizes/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
  })
  it('/Home/Item/4379/SPRESC/SPRI_Xercuffs_available_in_Very_light__Light__Medium_and_Heavy', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4379/SPRESC/SPRI_Xercuffs_available_in_Very_light__Light__Medium_and_Heavy/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
  })
  it('/home/Item/4385/SPRPW2/SPRI_Power_Wheel_', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4385/SPRPW2/SPRI_Power_Wheel_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4385/sprpw2/spri_power_wheel_/');
  })
  it('/Home/Item/4410/SFID325/Body-Solid_ProClub_SFID325_Adjustable_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4410/SFID325/Body-Solid_ProClub_SFID325_Adjustable_Bench/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4410/sfid325/body-solid_proclub_sfid325_adjustable_bench/');
  })
  it('/home/Item/4410/SFID325/Body-Solid_ProClub_SFID325_Flat-Incline-Decline_Bench', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4410/SFID325/Body-Solid_ProClub_SFID325_Flat-Incline-Decline_Bench/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4410/sfid325/body-solid_proclub_sfid325_flat-incline-decline_bench/');
  })
  it('/home/item/4415/sptxt185/spirit_xt185_treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/item/4415/sptxt185/spirit_xt185_treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4415/sptxt185/spirit_xt185_treadmill/');
  })
  it('/Home/Item/4426/S053036/Stamina_36lb__Adjustable_Kettle_Versa-Bell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4426/S053036/Stamina_36lb__Adjustable_Kettle_Versa-Bell/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4426/s053036/stamina_36lb__adjustable_kettle_versa-bell/');
  })
  it('/home/item/4431/kbc1070set/5-35lb__double_chrome_kettlebell_set_with_rack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4431/kbc1070set/5-35lb__double_chrome_kettlebell_set_with_rack/service=/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4431/kbc1070set/5-35lb__double_chrome_kettlebell_set_with_rack/service=/service=/');
  })
  it('/home/item/4438/abccs3000/ab_coaster_cs3000', () => {
    cy.visit('https://fitnessfactory.com/home/item/4438/abccs3000/ab_coaster_cs3000/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4438/abccs3000/ab_coaster_cs3000/');
  })
  it('/Home/Item/4443/GDR10/Body-Solid_Small_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4443/GDR10/Body-Solid_Small_Dumbbell_Rack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4443/gdr10/body-solid_small_dumbbell_rack/');
  })
  it('/home/Item/4449/RMCY600a/Cybex_600A_Arc_Trainer', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4449/RMCY600a/Cybex_600A_Arc_Trainer/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4449/rmcy600a/cybex_600a_arc_trainer/');
  })
  it('/Home/Item/4450/RMCY610a/Cybex_610A_Arc_Trainer', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4450/RMCY610a/Cybex_610A_Arc_Trainer/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4450/rmcy610a/cybex_610a_arc_trainer/');
  })
  it('/home/Item/4450/RMCY610a/Cybex_610A_Arc_Trainer', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4450/RMCY610a/Cybex_610A_Arc_Trainer/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4450/rmcy610a/cybex_610a_arc_trainer/');
  })
  it('/home/item/4450/rmcy610a/cybex_610a_arc_trainer', () => {
    cy.visit('https://fitnessfactory.com/home/item/4450/rmcy610a/cybex_610a_arc_trainer/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4450/rmcy610a/cybex_610a_arc_trainer/');
  })
  it('/home/item/4452/rm9500hr/life_fitness_9500hr_treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/item/4452/rm9500hr/life_fitness_9500hr_treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4452/rm9500hr/life_fitness_9500hr_treadmill/');
  })
  it('/home/Item/4452/RM9500HR/Life_Fitness_9500HR_Treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4452/RM9500HR/Life_Fitness_9500HR_Treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4452/rm9500hr/life_fitness_9500hr_treadmill/');
  })
  it('/Home/Item/4457/RM966i/Precor_C966i-HR_Treadmill', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4457/RM966i/Precor_C966i-HR_Treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4457/rm966i/precor_c966i-hr_treadmill/');
  })
  it('/Home/Item/4460/BFAB20/Best_Fitness_Mantis_Ab_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4460/BFAB20/Best_Fitness_Mantis_Ab_Bench/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4460/bfab20/best_fitness_mantis_ab_bench/');
  })
  it('/home/item/4467/rm546hr/precor_efx_546_elliptical_with_hr', () => {
    cy.visit('https://fitnessfactory.com/home/item/4467/rm546hr/precor_efx_546_elliptical_with_hr/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4467/rm546hr/precor_efx_546_elliptical_with_hr/');
  })
  it('/home/Item/4481/BSTAW/Body-Solid_Ankle_Weights', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4481/BSTAW/Body-Solid_Ankle_Weights/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4481/bstaw/body-solid_ankle_weights/');
  })
  it('/home/item/4484/imdb75/ironmaster_quick-lock_dumbbell_system', () => {
    cy.visit('https://fitnessfactory.com/home/item/4484/imdb75/ironmaster_quick-lock_dumbbell_system/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4484/imdb75/ironmaster_quick-lock_dumbbell_system/');
  })
  it('/Home/Item/4491/SPTXT685/Spirit_XT685_Treadmill', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4491/SPTXT685/Spirit_XT685_Treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4491/sptxt685/spirit_xt685_treadmill/');
  })
  it('/home/item/4491/sptxt685/spirit_xt685_treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/item/4491/sptxt685/spirit_xt685_treadmill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4491/sptxt685/spirit_xt685_treadmill/');
  })
  it('/home/item/4497/l790clubet/landice_club_l7_executive_trainer_treadmill/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/4497/l790clubet/landice_club_l7_executive_trainer_treadmill/service=/service=/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4497/l790clubet/landice_club_l7_executive_trainer_treadmill/service=/service=/adeasel.com');
  })
  it('/home/Item/4500/L790CLUBPST/Landice_L7_Treadmill_CLUB_-_Pro_Sport_Panel/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4500/L790CLUBPST/Landice_L7_Treadmill_CLUB_-_Pro_Sport_Panel/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/Item/4500/L790CLUBPST/Landice_L7_Treadmill_CLUB_-_Pro_Sport_Panel/adeasel.com');
  })
  it('/home/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service=/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service=/adeasel.com');
  })
  it('/home/item/4504/l790ltdpst/landice_ltd_l7_pro_sport_trainer_treadmill/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/4504/l790ltdpst/landice_ltd_l7_pro_sport_trainer_treadmill/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4504/l790ltdpst/landice_ltd_l7_pro_sport_trainer_treadmill/adeasel.com');
  })
  it('/home/Item/4508/L890RESPST/Landice_L8_Treadmill_-_Pro_Sport_Panel', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4508/L890RESPST/Landice_L8_Treadmill_-_Pro_Sport_Panel/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4508/l890respst/landice_l8_treadmill_-_pro_sport_panel/');
  })
  it('/home/item/4509/l890ltdpt/landice_ltd_l8_pro_trainer_treadmill/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4509/l890ltdpt/landice_ltd_l8_pro_trainer_treadmill/service=/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4509/l890ltdpt/landice_ltd_l8_pro_trainer_treadmill/service=/service=/');
  })
  it('/home/Item/4510/L880LTDPST/Landice_LTD_L8_Pro_Sports_Trainer_Treadmill/service', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4510/L880LTDPST/Landice_LTD_L8_Pro_Sports_Trainer_Treadmill/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4510/l880ltdpst/landice_ltd_l8_pro_sports_trainer_treadmill/service=/');
  })
  it('/Home/Item/4517/L790RESCT/Landice_L7_Treadmill_-_Cardio_Panel', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4517/L790RESCT/Landice_L7_Treadmill_-_Cardio_Panel/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4517/l790resct/landice_l7_treadmill_-_cardio_panel/');
  })
  it('/Home/Item/4522/L990CLUBET/Landice_CLUB_L9_Executive_Trainer_Treadmill/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4522/L990CLUBET/Landice_CLUB_L9_Executive_Trainer_Treadmill/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/Item/4522/L990CLUBET/Landice_CLUB_L9_Executive_Trainer_Treadmill/adeasel.com');
  })
  it('/home/item/4522/l990clubet/landice_club_l9_executive_trainer_treadmill/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4522/l990clubet/landice_club_l9_executive_trainer_treadmill/service=/service=');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4522/l990clubet/landice_club_l9_executive_trainer_treadmill/service=/service=/');
  })
  it('/home/item/4527/le950pt/landice_e9_pro_trainer_elliptimill', () => {
    cy.visit('https://fitnessfactory.com/home/item/4527/le950pt/landice_e9_pro_trainer_elliptimill/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4527/le950pt/landice_e9_pro_trainer_elliptimill/');
  })
  it('/home/item/4528/le950comst/landice_e9_elliptimill_-_pro_sport_panel/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4528/le950comst/landice_e9_elliptimill_-_pro_sport_panel/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4528/le950comst/landice_e9_elliptimill_-_pro_sport_panel/service=/');
  })
  it('/home/Item/4530/LE950ET/Landice_E9_ElliptiMill_-_Executive_Control_Panel/service', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4530/LE950ET/Landice_E9_ElliptiMill_-_Executive_Control_Panel/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4530/le950et/landice_e9_elliptimill_-_executive_control_panel/service=/');
  })
  it('/home/Item/4533/LVESAD/Landice_VESA-D_Mounting_Bracket', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4533/LVESAD/Landice_VESA-D_Mounting_Bracket/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4533/lvesad/landice_vesa-d_mounting_bracket/');
  })
  it('/home/item/4540/stvs1/ironman_sauna_suit', () => {
    cy.visit('https://fitnessfactory.com/home/item/4540/stvs1/ironman_sauna_suit/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4540/stvs1/ironman_sauna_suit/');
  })
  it('/home/item/4550/xg10/dkn_xg-10_commerical_power_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/4550/xg10/dkn_xg-10_commerical_power_plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4550/xg10/dkn_xg-10_commerical_power_plate/');
  })
  it('/Home/Item/4580/TRURE700-LCD/True_ES700_Recumbent_Bike_-_LCD_Screen', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4580/TRURE700-LCD/True_ES700_Recumbent_Bike_-_LCD_Screen/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4580/trure700-lcd/true_es700_recumbent_bike_-_lcd_screen/');
  })
  it('/home/Item/4581/TRURE900-LCD/True_ES900_Recumbent_Bike_-_LCD_Screen', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4581/TRURE900-LCD/True_ES900_Recumbent_Bike_-_LCD_Screen/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4581/trure900-lcd/true_es900_recumbent_bike_-_lcd_screen/');
  })
  it('/Home/Item/4588/GDR10P4/Body-Solid_Vinyl_Dumbbell_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4588/GDR10P4/Body-Solid_Vinyl_Dumbbell_Package/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4588/gdr10p4/body-solid_vinyl_dumbbell_package/');
  })
  it('/home/item/4599/bstpb12/12_inch_body-solid_plyo_box', () => {
    cy.visit('https://fitnessfactory.com/home/item/4599/bstpb12/12_inch_body-solid_plyo_box/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4599/bstpb12/12_inch_body-solid_plyo_box/');
  })
  it('/home/item/4599/bstpb12/body-solid_plyo_box_12_', () => {
    cy.visit('https://fitnessfactory.com/home/item/4599/bstpb12/body-solid_plyo_box_12_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4599/bstpb12/body-solid_plyo_box_12_/');
  })
  it('/home/item/4601/bstpb36/body-solid_plyo_box_36_', () => {
    cy.visit('https://fitnessfactory.com/home/item/4601/bstpb36/body-solid_plyo_box_36_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4601/bstpb36/body-solid_plyo_box_36_/');
  })
  it('/home/item/4603/bstpb6/body-solid_plyo_box_6_', () => {
    cy.visit('https://fitnessfactory.com/home/item/4603/bstpb6/body-solid_plyo_box_6_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4603/bstpb6/body-solid_plyo_box_6_/');
  })
  it('/Home/Item/4605/BSTPBS2/Body-Solid_Plyo_Box_Set_of_4', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4605/BSTPBS2/Body-Solid_Plyo_Box_Set_of_4/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4605/bstpbs2/body-solid_plyo_box_set_of_4/');
  })
  it('/home/item/4606/bstpbs5/body-solid_plyo_box_complete_set_of_7/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/4606/bstpbs5/body-solid_plyo_box_complete_set_of_7/service=/service=/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4606/bstpbs5/body-solid_plyo_box_complete_set_of_7/service=/service=/');
  })
  it('/home/item/4616/ccorerings/tubular_rings_with_straps/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/4616/ccorerings/tubular_rings_with_straps/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4616/ccorerings/tubular_rings_with_straps/adeasel.com');
  })
  it('/home/item/4642/gbpr10/body-solid_bumper_plate_rack', () => {
    cy.visit('https://fitnessfactory.com/home/item/4642/gbpr10/body-solid_bumper_plate_rack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4642/gbpr10/body-solid_bumper_plate_rack/');
  })
  it('/Home/Item/4643/BSTND/Neoprene_Dumbbells_1-15_lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4643/BSTND/Neoprene_Dumbbells_1-15_lbs_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4643/bstnd/neoprene_dumbbells_1-15_lbs_/');
  })
  it('/Home/Item/4675/SPR05-58642/SPRI_Bi-Fold_Exercise_Mat_60_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4675/SPR05-58642/SPRI_Bi-Fold_Exercise_Mat_60_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/exercise-yoga-mats/');
  })
  it('/Home/Item/4678/OBPH/Premium_U_S_A__Rubber_Bumper_Plates_10-45lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4678/OBPH/Premium_U_S_A__Rubber_Bumper_Plates_10-45lbs_/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4678/obph/premium_u_s_a__rubber_bumper_plates_10-45lbs_/');
  })
  it('/home/Item/4694/ORC300S/300_lb__Color_Grip_Olympic__Weight_Plate_Set_with_7__Barbell', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4694/ORC300S/300_lb__Color_Grip_Olympic__Weight_Plate_Set_with_7__Barbell/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4694/orc300s/300_lb__color_grip_olympic__weight_plate_set_with_7__barbell/');
  })
  it('/home/item/4697/8t50/endurance_t50_walking_rehab_treadmill-refurbished/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/4697/8t50/endurance_t50_walking_rehab_treadmill-refurbished/service=/service=/adeasel.com');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4697/8t50/endurance_t50_walking_rehab_treadmill-refurbished/service=/service=/adeasel.com');
  })
  it('/Home/Item/4697/8T50/Endurance_T50_Walking_Treadmill-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4697/8T50/Endurance_T50_Walking_Treadmill-Refurbished/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4697/8t50/endurance_t50_walking_treadmill-refurbished/');
  })
  it('/Home/Item/4728/WFTELITE/Waters_Fitness_Tsunami_Elite_Indoor_Cycle', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4728/WFTELITE/Waters_Fitness_Tsunami_Elite_Indoor_Cycle/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4728/wftelite/waters_fitness_tsunami_elite_indoor_cycle/');
  })
  it('/Home/Item/4732/8WT46/Olympic_Weight_Plate_Tree_and_Bar_Holder-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4732/8WT46/Olympic_Weight_Plate_Tree_and_Bar_Holder-Refurbished/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4732/8wt46/olympic_weight_plate_tree_and_bar_holder-refurbished/');
  })
  it('/Home/Item/4740/DCLP-/ProDual_DCLP_Leg_Calf_Press_Machine_with_300lb__Stack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4740/DCLP-/ProDual_DCLP_Leg_Calf_Press_Machine_with_300lb__Stack/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4740/dclp-/produal_dclp_leg_calf_press_machine_with_300lb__stack/');
  })
  it('/home/item/4787/xg10pro/dkn_xg-10_pro_commerical_power_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/4787/xg10pro/dkn_xg-10_pro_commerical_power_plate/');
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4787/xg10pro/dkn_xg-10_pro_commerical_power_plate/');
  })
})
