describe('Test redirects', () => {
  it('/Home/Item/4800/SDRS530/5_to_30_Lb__Rubber_Dumbbell_Set', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4800/SDRS530/5_to_30_Lb__Rubber_Dumbbell_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4800/sdrs530/5_to_30_lb__rubber_dumbbell_set/');
  })
  it('/Home/Item/4801/GPR378P500/Body-Solid_Power_Rack_Package_500', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4801/GPR378P500/Body-Solid_Power_Rack_Package_500/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4801/gpr378p500/body-solid_power_rack_package_500/');
  })
  it('/Home/Item/4801/GPR378P8/Body-Solid_500lb__Power_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4801/GPR378P8/Body-Solid_500lb__Power_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4801/gpr378p8/body-solid_500lb__power_rack_package/');
  })
  it('/Home/Item/4808/TBR20/Heavy_T_Bar_Row_Platform_TBR20', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4808/TBR20/Heavy_T_Bar_Row_Platform_TBR20/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4808/tbr20/heavy_t_bar_row_platform_tbr20/');
  })
  it('/home/Item/4809/RFSRPT/AKTIVLOK_Puzzle_Mats', () => {
    cy.visit('https://fitnessfactory.com/home/Item/4809/RFSRPT/AKTIVLOK_Puzzle_Mats/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4809/rfsrpt/aktivlok_puzzle_mats/');
  })
  it('/Home/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Ab_Back_Machine_with_210lb__Weight_Stack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Ab_Back_Machine_with_210lb__Weight_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4813/gcab-stk/body-solid_gcab-stk_ab_back_machine_with_210lb__weight_stack/');
  })
  it('/Home/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Selectorized_Ab_Back_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Selectorized_Ab_Back_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4813/gcab-stk/body-solid_gcab-stk_selectorized_ab_back_machine/');
  })
  it('/Home/Item/4814/GCEC-STK/Body-Solid_GCEC-STK_Leg_Extension_Curl_with_210lb__Weight_Stack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/4814/GCEC-STK/Body-Solid_GCEC-STK_Leg_Extension_Curl_with_210lb__Weight_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4814/gcec-stk/body-solid_gcec-stk_leg_extension_curl_with_210lb__weight_stack/');
  })
  it('/home/item/4815/gcbt-stk/body-solid_pro-select_bicep_tricep', () => {
    cy.visit('https://fitnessfactory.com/home/item/4815/gcbt-stk/body-solid_pro-select_bicep_tricep/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4815/gcbt-stk/body-solid_pro-select_bicep_tricep/');
  })
  it('/Home/Item/5254/ORC/Olympic_Color_Grip_Weight_Plates_2-45_lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5254/ORC/Olympic_Color_Grip_Weight_Plates_2-45_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5254/orc/olympic_color_grip_weight_plates_2-45_lbs_/');
  })
  it('/Home/Item/5264/LMCG/Club_Grip_LMCG_Landmine_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5264/LMCG/Club_Grip_LMCG_Landmine_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5264/lmcg/club_grip_lmcg_landmine_attachment/');
  })
  it('/home/item/5268/bstnd/1-15_lb__neoprene_pairs_set_of_24/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5268/bstnd/1-15_lb__neoprene_pairs_set_of_24/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5268/bstnd/1-15_lb__neoprene_pairs_set_of_24/service=/');
  })
  it('/Home/Item/5269/OSG-SETS/Olympic_Deep_Dish_Weight_Plate_Sets_with_Bar', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5269/OSG-SETS/Olympic_Deep_Dish_Weight_Plate_Sets_with_Bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5269/osg-sets/olympic_deep_dish_weight_plate_sets_with_bar/');
  })
  it('/Home/Item/5276/S2SP/Pro_ClubLine_Series_2_S2SP_Shoulder_Press/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5276/S2SP/Pro_ClubLine_Series_2_S2SP_Shoulder_Press/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5276/S2SP/Pro_ClubLine_Series_2_S2SP_Shoulder_Press/adeasel.com');
  })
  it('/Home/Item/5281/S2LEX/Pro_ClubLine_Series_2_S2LEX__Leg_Extension/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5281/S2LEX/Pro_ClubLine_Series_2_S2LEX__Leg_Extension/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5281/S2LEX/Pro_ClubLine_Series_2_S2LEX__Leg_Extension/adeasel.com');
  })
  it('/home/item/5281/s2lex/pro_clubline_series_2_s2lex__leg_extension/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/5281/s2lex/pro_clubline_series_2_s2lex__leg_extension/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5281/s2lex/pro_clubline_series_2_s2lex__leg_extension/adeasel.com');
  })
  it('/home/Item/5282/S2LAT/Pro_ClubLine_Series_2_S2LAT_Lat_Seated_Row', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5282/S2LAT/Pro_ClubLine_Series_2_S2LAT_Lat_Seated_Row/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5282/s2lat/pro_clubline_series_2_s2lat_lat_seated_row/');
  })
  it('/home/item/5282/s2lat/pro_clubline_series_2_s2lat_lat_seated_row/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5282/s2lat/pro_clubline_series_2_s2lat_lat_seated_row/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5282/s2lat/pro_clubline_series_2_s2lat_lat_seated_row/service=/service=/');
  })
  it('/home/item/5295/s2ac/series_2_arm_curl_160lb__stack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5295/s2ac/series_2_arm_curl_160lb__stack/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5295/s2ac/series_2_arm_curl_160lb__stack/service=/service=/');
  })
  it('/Home/Item/5308/SGH500/Body-Solid_Glute___Ham', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5308/SGH500/Body-Solid_Glute___Ham/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5308/sgh500/body-solid_glute___ham/');
  })
  it('/home/Item/5308/SGH500/Body-Solid_SGH500_Glute_and_Ham_Machine/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5308/SGH500/Body-Solid_SGH500_Glute_and_Ham_Machine/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5308/SGH500/Body-Solid_SGH500_Glute_and_Ham_Machine/adeasel.com');
  })
  it('/home/item/5309/bfpr100/best_fitness_power_rack_bfpr100', () => {
    cy.visit('https://fitnessfactory.com/home/item/5309/bfpr100/best_fitness_power_rack_bfpr100/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5309/bfpr100/best_fitness_power_rack_bfpr100/');
  })
  it('/home/Item/5309/BFPR100/Body-Solid_EXM3000LPS_Double_Stack_Gym/service', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5309/BFPR100/Body-Solid_EXM3000LPS_Double_Stack_Gym/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5309/bfpr100/body-solid_exm3000lps_double_stack_gym/service=/');
  })
  it('/home/Item/5310/WSA7-5/7_5_lb__Weight_Stack_Adapter_Plate_Set', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5310/WSA7-5/7_5_lb__Weight_Stack_Adapter_Plate_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5310/wsa7-5/7_5_lb__weight_stack_adapter_plate_set/');
  })
  it('/home/item/5317/phystp-ltd/physiostep_ltd_recumbent_elliptical', () => {
    cy.visit('https://fitnessfactory.com/home/item/5317/phystp-ltd/physiostep_ltd_recumbent_elliptical/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5317/phystp-ltd/physiostep_ltd_recumbent_elliptical/');
  })
  it('/home/Item/5319/PHYSTP-RXT/PhysioStep_RXT_Recumbent_Elliptical', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5319/PHYSTP-RXT/PhysioStep_RXT_Recumbent_Elliptical/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5319/phystp-rxt/physiostep_rxt_recumbent_elliptical/');
  })
  it('/home/item/5331/kaxosr/kettler_axos_cycle_r/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5331/kaxosr/kettler_axos_cycle_r/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5331/kaxosr/kettler_axos_cycle_r/service=/service=/');
  })
  it('/home/Item/5332/KE3/Kettler_E3_Upright_Bike', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5332/KE3/Kettler_E3_Upright_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5332/ke3/kettler_e3_upright_bike/');
  })
  it('/Home/Item/5349/BSTB2/Body-Solid_Resistance_Band_-_Light', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5349/BSTB2/Body-Solid_Resistance_Band_-_Light/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5349/bstb2/body-solid_resistance_band_-_light/');
  })
  it('/Home/Item/5360/TRUPS100E/True_Performance_100_Elliptical', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5360/TRUPS100E/True_Performance_100_Elliptical/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5360/trups100e/true_performance_100_elliptical/');
  })
  it('/home/item/5381/htl3000/helix_htl_3000_lateral_aerobic_trainer', () => {
    cy.visit('https://fitnessfactory.com/home/item/5381/htl3000/helix_htl_3000_lateral_aerobic_trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5381/htl3000/helix_htl_3000_lateral_aerobic_trainer/');
  })
  it('/Home/Item/5383/STIRRC126/Rumble_Roller_12__Deep_Tissue_Massage', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5383/STIRRC126/Rumble_Roller_12__Deep_Tissue_Massage/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5383/stirrc126/rumble_roller_12__deep_tissue_massage/');
  })
  it('/home/Item/5401/RCF-PB030/V/Rage_Fitness_Soft_Plyo_Box', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5401/RCF-PB030/V/Rage_Fitness_Soft_Plyo_Box/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5401/rcf-pb030/v/rage_fitness_soft_plyo_box/');
  })
  it('/Home/Item/5415/RCH-24000/Gym_Chalk_Cubes_Box_of_8', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5415/RCH-24000/Gym_Chalk_Cubes_Box_of_8/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5415/rch-24000/gym_chalk_cubes_box_of_8/');
  })
  it('/home/item/5438/c108708/century_heavy_bag___speed_bag_platform', () => {
    cy.visit('https://fitnessfactory.com/home/item/5438/c108708/century_heavy_bag___speed_bag_platform/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5438/c108708/century_heavy_bag___speed_bag_platform/');
  })
  it('/home/item/5439/c143111p/century_wrist_wrap_boxing_gloves', () => {
    cy.visit('https://fitnessfactory.com/home/item/5439/c143111p/century_wrist_wrap_boxing_gloves/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5439/c143111p/century_wrist_wrap_boxing_gloves/');
  })
  it('/home/item/5443/ccore4mprack/crosscore_multi_purpose_rack', () => {
    cy.visit('https://fitnessfactory.com/home/item/5443/ccore4mprack/crosscore_multi_purpose_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5443/ccore4mprack/crosscore_multi_purpose_rack/');
  })
  it('/home/item/5448/jl/jacobs_ladder', () => {
    cy.visit('https://fitnessfactory.com/home/item/5448/jl/jacobs_ladder/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5448/jl/jacobs_ladder/');
  })
  it('/Home/Item/5471/TRUES700R/True_ES700_Recumbent_Bike_-_Emerge_Console', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5471/TRUES700R/True_ES700_Recumbent_Bike_-_Emerge_Console/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5471/trues700r/true_es700_recumbent_bike_-_emerge_console/');
  })
  it('/home/Item/5471/TRUES700RE/True_ES700_Recumbent_Bike_-_Emerge_Console', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5471/TRUES700RE/True_ES700_Recumbent_Bike_-_Emerge_Console/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5471/trues700re/true_es700_recumbent_bike_-_emerge_console/');
  })
  it('/Home/Item/5473/TRUXES700E/True_ES700_Elliptical_-_Emerge', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5473/TRUXES700E/True_ES700_Elliptical_-_Emerge/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cardio-machines/ellipticals/');
  })
  it('/home/Item/5474/TRUES700E9TFT/True_ES700_Elliptical_-_Transcend_9__Console', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5474/TRUES700E9TFT/True_ES700_Elliptical_-_Transcend_9__Console/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5474/trues700e9tft/true_es700_elliptical_-_transcend_9__console/');
  })
  it('/home/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service=/');
  })
  it('/home/item/5487/db910ub/diamondback_910ub_upright_bike', () => {
    cy.visit('https://fitnessfactory.com/home/item/5487/db910ub/diamondback_910ub_upright_bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5487/db910ub/diamondback_910ub_upright_bike/');
  })
  it('/Home/Item/5492/OB86P1000SSLJC/Body-Solid_Premium_7__Brushed_Steel_Olympic_Barbell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5492/OB86P1000SSLJC/Body-Solid_Premium_7__Brushed_Steel_Olympic_Barbell/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5492/ob86p1000ssljc/body-solid_premium_7__brushed_steel_olympic_barbell/');
  })
  it('/home/item/5495/b5r/endurance_b5_recumbent_bike', () => {
    cy.visit('https://fitnessfactory.com/home/item/5495/b5r/endurance_b5_recumbent_bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5495/b5r/endurance_b5_recumbent_bike/');
  })
  it('/home/Item/5497/P2LPX50/P2LPX_Home_Gym_Special', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5497/P2LPX50/P2LPX_Home_Gym_Special/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5497/p2lpx50/p2lpx_home_gym_special/');
  })
  it('/Home/Item/5504/BSTFRP18F/Body-Solid_Premium_Short_Foam_Roller_18_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5504/BSTFRP18F/Body-Solid_Premium_Short_Foam_Roller_18_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5504/bstfrp18f/body-solid_premium_short_foam_roller_18_/');
  })
  it('/Home/Item/5538/TRUC400E9TFT/True_C400_Commercial_Elliptical-_Escalate_9_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5538/TRUC400E9TFT/True_C400_Commercial_Elliptical-_Escalate_9_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5538/truc400e9tft/true_c400_commercial_elliptical-_escalate_9_/');
  })
  it('/home/item/5538/trucs400-e/true_cs400_commercial_elliptical_-_escalate_9_/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5538/trucs400-e/true_cs400_commercial_elliptical_-_escalate_9_/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5538/trucs400-e/true_cs400_commercial_elliptical_-_escalate_9_/service=/service=/');
  })
  it('/Home/Item/5551/TRUCS400R/True_CS400_Recumbent_Bike', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5551/TRUCS400R/True_CS400_Recumbent_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5551/trucs400r/true_cs400_recumbent_bike/');
  })
  it('/home/item/5569/truc650/true_c650_commercial_treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/item/5569/truc650/true_c650_commercial_treadmill/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5569/truc650/true_c650_commercial_treadmill/');
  })
  it('/Home/Item/5577/TRUC900E/True_C900_Commercial_Elliptical-_Emerge', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5577/TRUC900E/True_C900_Commercial_Elliptical-_Emerge/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5577/truc900e/true_c900_commercial_elliptical-_emerge/');
  })
  it('/home/item/5577/truc900e/true_c900_elliptical_with_emerge_console', () => {
    cy.visit('https://fitnessfactory.com/home/item/5577/truc900e/true_c900_elliptical_with_emerge_console/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5577/truc900e/true_c900_elliptical_with_emerge_console/');
  })
  it('/Home/Item/5580/TRUC900ET16T/True_C900_Commercial_Elliptical-_Transcend_16_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5580/TRUC900ET16T/True_C900_Commercial_Elliptical-_Transcend_16_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5580/truc900et16t/true_c900_commercial_elliptical-_transcend_16_/');
  })
  it('/home/Item/5583/TRUCS900R/True_CS900_Recumbent_Bike', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5583/TRUCS900R/True_CS900_Recumbent_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5583/trucs900r/true_cs900_recumbent_bike/');
  })
  it('/Home/Item/5588/TRUCS900-U/True_CS900_Upright_Bike', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5588/TRUCS900-U/True_CS900_Upright_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5588/trucs900-u/true_cs900_upright_bike/');
  })
  it('/home/item/5594/trulc1100/true_lc1100_commercial_treadmill', () => {
    cy.visit('https://fitnessfactory.com/home/item/5594/trulc1100/true_lc1100_commercial_treadmill/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5594/trulc1100/true_lc1100_commercial_treadmill/');
  })
  it('/home/item/5595/trulc900e2w/true_lc900_elliptical/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/5595/trulc900e2w/true_lc900_elliptical/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5595/trulc900e2w/true_lc900_elliptical/service=/service=/adeasel.com');
  })
  it('/Home/Item/5600/HP200/Premium_Red_Weight_Stack_200lbs_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5600/HP200/Premium_Red_Weight_Stack_200lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5600/hp200/premium_red_weight_stack_200lbs_/');
  })
  it('/home/item/5600/hp200/premium_red_weight_stack_200lbs_/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5600/hp200/premium_red_weight_stack_200lbs_/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5600/hp200/premium_red_weight_stack_200lbs_/service=/service=/');
  })
  it('/Home/Item/5619/OB86PBG10/Body-Solid_Gold_Olympic_Bar_10_Pack/service', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5619/OB86PBG10/Body-Solid_Gold_Olympic_Bar_10_Pack/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5619/ob86pbg10/body-solid_gold_olympic_bar_10_pack/service=/');
  })
  it('/home/Item/5619/OB86PBG10/Gold_Olympic_Bar_10_Pack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5619/OB86PBG10/Gold_Olympic_Bar_10_Pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5619/ob86pbg10/gold_olympic_bar_10_pack/');
  })
  it('/home/item/5619/ob86pbg10/gold_olympic_bar_10_pack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5619/ob86pbg10/gold_olympic_bar_10_pack/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5619/ob86pbg10/gold_olympic_bar_10_pack/service=/service=/');
  })
  it('/home/Item/5626/OB86PB10/Bronze_Olympic_Bar_10_Pack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5626/OB86PB10/Bronze_Olympic_Bar_10_Pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5626/ob86pb10/bronze_olympic_bar_10_pack/');
  })
  it('/home/Item/5638/OB72B10/6__Black_Olympic_Bar_10_Pack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5638/OB72B10/6__Black_Olympic_Bar_10_Pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5638/ob72b10/6__black_olympic_bar_10_pack/');
  })
  it('/home/Item/5640/OB60B5/5__Black_Olympic_Bar_5_Pack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5640/OB60B5/5__Black_Olympic_Bar_5_Pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5640/ob60b5/5__black_olympic_bar_5_pack/');
  })
  it('/Home/Item/5640/OB60B5/5__Black_Olympic_Bar_5_Pack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5640/OB60B5/5__Black_Olympic_Bar_5_Pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5640/ob60b5/5__black_olympic_bar_5_pack/');
  })
  it('/home/item/5644/ob72a1510/lightweight_olympic_bar_10_pack', () => {
    cy.visit('https://fitnessfactory.com/home/item/5644/ob72a1510/lightweight_olympic_bar_10_pack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5644/ob72a1510/lightweight_olympic_bar_10_pack/');
  })
  it('/home/Item/5646/KAXOSP/Kettler_AXOS_Upright_Cycle_P-LA', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5646/KAXOSP/Kettler_AXOS_Upright_Cycle_P-LA/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5646/kaxosp/kettler_axos_upright_cycle_p-la/');
  })
  it('/home/item/5653/bhmgs/bladez_master_gs_indoor_cycle', () => {
    cy.visit('https://fitnessfactory.com/home/item/5653/bhmgs/bladez_master_gs_indoor_cycle/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cardio-machines/indoor-cycles/');
  })
  it('/home/item/5655/bhcas/bladez_cascade_rower', () => {
    cy.visit('https://fitnessfactory.com/home/item/5655/bhcas/bladez_cascade_rower/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cardio-machines/rowing-machine/');
  })
  it('/home/item/5662/ob864star10/four_star_olympic_bar_10_pack/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5662/ob864star10/four_star_olympic_bar_10_pack/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5662/ob864star10/four_star_olympic_bar_10_pack/service=/');
  })
  it('/home/item/5692/mcgpk2/muscle_craft_gym_package_2_with_olympic_weight_set', () => {
    cy.visit('https://fitnessfactory.com/home/item/5692/mcgpk2/muscle_craft_gym_package_2_with_olympic_weight_set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5692/mcgpk2/muscle_craft_gym_package_2_with_olympic_weight_set/');
  })
  it('/Home/Item/5692/MCGPK2/Muscle_Craft_Gym_Package_2_with_Olympic_Weight_Set', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5692/MCGPK2/Muscle_Craft_Gym_Package_2_with_Olympic_Weight_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5692/mcgpk2/muscle_craft_gym_package_2_with_olympic_weight_set/');
  })
  it('/Home/Item/5694/MCGPK4/Muscle_Craft_Gym_Package_4_with_Weight_Set_and_Stack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5694/MCGPK4/Muscle_Craft_Gym_Package_4_with_Weight_Set_and_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5694/mcgpk4/muscle_craft_gym_package_4_with_weight_set_and_stack/');
  })
  it('/home/item/5696/kbl/vinyl_dipped_kettleballs', () => {
    cy.visit('https://fitnessfactory.com/home/item/5696/kbl/vinyl_dipped_kettleballs/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5696/kbl/vinyl_dipped_kettleballs/');
  })
  it('/home/item/5709/sr-hexadvanced/hexagon_training_rig_advanced_package', () => {
    cy.visit('https://fitnessfactory.com/home/item/5709/sr-hexadvanced/hexagon_training_rig_advanced_package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/racks-cages/power-racks/');
  })
  it('/home/item/5709/sr-hexadvanced/hexagon_training_rig_advanced_package/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/5709/sr-hexadvanced/hexagon_training_rig_advanced_package/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/racks-cages/power-racks/');
  })
  it('/Home/Item/5714/SR-BHV/Rig_Mount_Bar_Holder', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5714/SR-BHV/Rig_Mount_Bar_Holder/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5714/sr-bhv/rig_mount_bar_holder/');
  })
  it('/home/item/5719/sr-fpu/hexagon_flying_pull_up', () => {
    cy.visit('https://fitnessfactory.com/home/item/5719/sr-fpu/hexagon_flying_pull_up/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5719/sr-fpu/hexagon_flying_pull_up/');
  })
  it('/Home/Item/5725/SR-SBH/Rig_Mount_Stability_Ball_Holder', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5725/SR-SBH/Rig_Mount_Stability_Ball_Holder/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5725/sr-sbh/rig_mount_stability_ball_holder/');
  })
  it('/Home/Item/5727/SR-REB/Rig_Mount_Ball_Rebounder', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5727/SR-REB/Rig_Mount_Ball_Rebounder/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5727/sr-reb/rig_mount_ball_rebounder/');
  })
  it('/home/Item/5731/SR-SUSP/Hexagon_Suspension_Rings', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5731/SR-SUSP/Hexagon_Suspension_Rings/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5731/sr-susp/hexagon_suspension_rings/');
  })
  it('/home/item/5735/sr-wps/hexagon_weight_plate_storage', () => {
    cy.visit('https://fitnessfactory.com/home/item/5735/sr-wps/hexagon_weight_plate_storage/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5735/sr-wps/hexagon_weight_plate_storage/');
  })
  it('/Home/Item/5735/SR-WPS/Hexagon_Weight_Plate_Storage', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5735/SR-WPS/Hexagon_Weight_Plate_Storage/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5735/sr-wps/hexagon_weight_plate_storage/');
  })
  it('/home/item/5741/gdr363-pkg/body-solid_hex_dumbbell_package/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5741/gdr363-pkg/body-solid_hex_dumbbell_package/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5741/gdr363-pkg/body-solid_hex_dumbbell_package/service=/');
  })
  it('/home/item/5742/bstmc02bk/body-solid_tools_muscle_clamp_collars_black', () => {
    cy.visit('https://fitnessfactory.com/home/item/5742/bstmc02bk/body-solid_tools_muscle_clamp_collars_black/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5742/bstmc02bk/body-solid_tools_muscle_clamp_collars_black/');
  })
  it('/home/Item/5745/GCR100/Body-Solid_Cardio_Barbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5745/GCR100/Body-Solid_Cardio_Barbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5745/gcr100/body-solid_cardio_barbell_rack/');
  })
  it('/home/Item/5747/RFHU34/Humane_Beveled_Edge_Cardio_Mat_3__x_4_/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5747/RFHU34/Humane_Beveled_Edge_Cardio_Mat_3__x_4_/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5747/RFHU34/Humane_Beveled_Edge_Cardio_Mat_3__x_4_/adeasel.com');
  })
  it('/home/Item/5747/RFHU34/SuperSport_3_x4__Beveled_Cardio_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5747/RFHU34/SuperSport_3_x4__Beveled_Cardio_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5747/rfhu34/supersport_3_x4__beveled_cardio_rubber_flooring_mat/');
  })
  it('/Home/Item/5748/RFHU38/3__x_8__SuperSport_Beveled_2-Piece_Cardio_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5748/RFHU38/3__x_8__SuperSport_Beveled_2-Piece_Cardio_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5748/rfhu38/3__x_8__supersport_beveled_2-piece_cardio_mat/');
  })
  it('/Home/Item/5748/RFHU38/SuperSport__3_x8__Beveled_Treadmill_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5748/RFHU38/SuperSport__3_x8__Beveled_Treadmill_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5748/rfhu38/supersport__3_x8__beveled_treadmill_rubber_flooring_mat/');
  })
  it('/Home/Item/5748/RFHU38/SuperSport_3_x8__Beveled_Treadmill_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5748/RFHU38/SuperSport_3_x8__Beveled_Treadmill_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5748/rfhu38/supersport_3_x8__beveled_treadmill_rubber_flooring_mat/');
  })
  it('/home/item/5749/rfhu48/4__x_8__supersport_beveled_rubber_2-piece_cardio_mat__3_4__thick', () => {
    cy.visit('https://fitnessfactory.com/home/item/5749/rfhu48/4__x_8__supersport_beveled_rubber_2-piece_cardio_mat__3_4__thick/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5749/rfhu48/4__x_8__supersport_beveled_rubber_2-piece_cardio_mat__3_4__thick/');
  })
  it('/Home/Item/5749/RFHU48/Shok-Lok_3_4_inch_SHOK_LOK_4_ft__x_8_ft_Treadmill__Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5749/RFHU48/Shok-Lok_3_4_inch_SHOK_LOK_4_ft__x_8_ft_Treadmill__Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5749/rfhu48/shok-lok_3_4_inch_shok_lok_4_ft__x_8_ft_treadmill__mat/');
  })
  it('/Home/Item/5749/RFHU48/SHOK-LOK_Anti_Noise_Vibration_Treadmill_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5749/RFHU48/SHOK-LOK_Anti_Noise_Vibration_Treadmill_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5749/rfhu48/shok-lok_anti_noise_vibration_treadmill_rubber_flooring_mat/');
  })
  it('/Home/Item/5749/RFHU48/Shok-Lok_Treadmat_4_x8___3_4__Thick_Rubber_Floor_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5749/RFHU48/Shok-Lok_Treadmat_4_x8___3_4__Thick_Rubber_Floor_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5749/rfhu48/shok-lok_treadmat_4_x8___3_4__thick_rubber_floor_mat/');
  })
  it('/Home/Item/5750/RFHU68/BigLok_Free_Weight_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5750/RFHU68/BigLok_Free_Weight_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5750/rfhu68/biglok_free_weight_mat/');
  })
  it('/Home/Item/5750/RFHU68/Shok-Lok__Power_Platform_7_-6_x6__Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5750/RFHU68/Shok-Lok__Power_Platform_7_-6_x6__Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5750/rfhu68/shok-lok__power_platform_7_-6_x6__rubber_flooring_mat/');
  })
  it('/Home/Item/5750/RFHU68/Shok-Lok_Power_Platform_7_-6__x_6__Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5750/RFHU68/Shok-Lok_Power_Platform_7_-6__x_6__Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5750/rfhu68/shok-lok_power_platform_7_-6__x_6__rubber_flooring_mat/');
  })
  it('/Home/Item/5751/RFHU79/Large_7_-9__x_7_-9__Rubber_Flooring_4-Piece_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5751/RFHU79/Large_7_-9__x_7_-9__Rubber_Flooring_4-Piece_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5751/rfhu79/large_7_-9__x_7_-9__rubber_flooring_4-piece_mat/');
  })
  it('/Home/Item/5751/RFHU79/Large_Multi-Station_Rubber_Flooring_Mat__7_-9__x_7_-9__', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5751/RFHU79/Large_Multi-Station_Rubber_Flooring_Mat__7_-9__x_7_-9__', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5751/rfhu79/large_multi-station_rubber_flooring_mat__7_-9__x_7_-9__/');
  })
  it('/Home/Item/5751/RFHU79/Power_Platform_8x8__Commercial_Rubber_Floor_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5751/RFHU79/Power_Platform_8x8__Commercial_Rubber_Floor_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5751/rfhu79/power_platform_8x8__commercial_rubber_floor_mat/');
  })
  it('/Home/Item/5751/RFHU79/SuperSport_8__x_8__4-Piece_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5751/RFHU79/SuperSport_8__x_8__4-Piece_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5751/rfhu79/supersport_8__x_8__4-piece_rubber_flooring_mat/');
  })
  it('/home/item/5754/8gab100/body-solid_horizontal_ab_bench-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/5754/8gab100/body-solid_horizontal_ab_bench-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5754/8gab100/body-solid_horizontal_ab_bench-refurbished/');
  })
  it('/Home/Item/5754/8GAB100/Body-Solid_Horizontal_Ab_Bench-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5754/8GAB100/Body-Solid_Horizontal_Ab_Bench-Refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5754/8gab100/body-solid_horizontal_ab_bench-refurbished/');
  })
  it('/Home/Item/5754/GAB100/Body-Solid_Horizontal_Ab_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5754/GAB100/Body-Solid_Horizontal_Ab_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5754/gab100/body-solid_horizontal_ab_bench/');
  })
  it('/home/Item/5756/BFOB10FFO9/Best_Fitness_Olympic_Bench_Package', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5756/BFOB10FFO9/Best_Fitness_Olympic_Bench_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5756/bfob10ffo9/best_fitness_olympic_bench_package/');
  })
  it('/home/item/5758/gdib46lffo9/body-solid_powercenter_package_with_lat__weight_sets/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/5758/gdib46lffo9/body-solid_powercenter_package_with_lat__weight_sets/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5758/gdib46lffo9/body-solid_powercenter_package_with_lat__weight_sets/service=/service=/');
  })
  it('/home/item/5772/kbv/5_lb__vinyl_coated_kettlebell', () => {
    cy.visit('https://fitnessfactory.com/home/item/5772/kbv/5_lb__vinyl_coated_kettlebell/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5772/kbv/5_lb__vinyl_coated_kettlebell/');
  })
  it('/home/item/5791/glgs100p4/body-solid_corner_leverage_gym_with_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/5791/glgs100p4/body-solid_corner_leverage_gym_with_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5791/glgs100p4/body-solid_corner_leverage_gym_with_bench/');
  })
  it('/Home/Item/5792/GFID100/Body-Solid_GFID100_Adjustable_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5792/GFID100/Body-Solid_GFID100_Adjustable_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5792/gfid100/body-solid_gfid100_adjustable_bench/');
  })
  it('/home/Item/5792/GFID100/Body-Solid_GFID100_Flat-Incline-Decline_Bench', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5792/GFID100/Body-Solid_GFID100_Flat-Incline-Decline_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5792/gfid100/body-solid_gfid100_flat-incline-decline_bench/');
  })
  it('/Home/Item/5793/GLGS100/Body-Solid_Corner_Leverage_Gym/service', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5793/GLGS100/Body-Solid_Corner_Leverage_Gym/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5793/glgs100/body-solid_corner_leverage_gym/service=/');
  })
  it('/Home/Item/5796/LU7/Landice_U7_Upright_Bike', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5796/LU7/Landice_U7_Upright_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5796/lu7/landice_u7_upright_bike/');
  })
  it('/home/item/5799/mb229/revolving_curl_bar', () => {
    cy.visit('https://fitnessfactory.com/home/item/5799/mb229/revolving_curl_bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5799/mb229/revolving_curl_bar/');
  })
  it('/home/Item/5804/RX2200/Ropeflex_RX2200_Horizontal_Wolf', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5804/RX2200/Ropeflex_RX2200_Horizontal_Wolf/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5804/rx2200/ropeflex_rx2200_horizontal_wolf/');
  })
  it('/home/item/5806/rx2300/ropeflex_rx2300_ibex', () => {
    cy.visit('https://fitnessfactory.com/home/item/5806/rx2300/ropeflex_rx2300_ibex/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5806/rx2300/ropeflex_rx2300_ibex/');
  })
  it('/home/Item/5807/RX2500/Ropeflex_RX2500_Oryx', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5807/RX2500/Ropeflex_RX2500_Oryx/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5807/rx2500/ropeflex_rx2500_oryx/');
  })
  it('/home/item/5808/obpp/25_lb__premium_bumper_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/5808/obpp/25_lb__premium_bumper_plate/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5808/obpp/25_lb__premium_bumper_plate/');
  })
  it('/Home/Item/5811/RFOX2-RX2100/Ropeflex_RX2100_OX2', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/5811/RFOX2-RX2100/Ropeflex_RX2100_OX2/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5811/rfox2-rx2100/ropeflex_rx2100_ox2/');
  })
  it('/home/Item/5836/HB138B/Harbinger_FlexFit__Gloves', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5836/HB138B/Harbinger_FlexFit__Gloves/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
  })
  it('/home/item/5843/hb1250b/harbinger_training_grip__wristwrap_gloves', () => {
    cy.visit('https://fitnessfactory.com/home/item/5843/hb1250b/harbinger_training_grip__wristwrap_gloves/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
  })
  it('/home/Item/5843/HB1250B/Harbinger_Training_Grip__Wristwrap_Gloves', () => {
    cy.visit('https://fitnessfactory.com/home/Item/5843/HB1250B/Harbinger_Training_Grip__Wristwrap_Gloves/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
  })
})
