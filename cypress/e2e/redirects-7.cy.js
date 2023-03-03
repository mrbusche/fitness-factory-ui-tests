describe('Test redirects', () => {
    it('/home/item/6544/st8trx-110-10/star_trac_8-trx_treadmill_110v__10__console', () => {
        cy.visit('https://fitnessfactory.com/home/item/6544/st8trx-110-10/star_trac_8-trx_treadmill_110v__10__console/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6544/st8trx-110-10/star_trac_8-trx_treadmill_110v__10__console/');
    })
    it('/Home/Item/6547/ST8TRX-110-15-ATSC/Star_Trac_8-TRx_Treadmill_110v__15__Console_ATSC', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6547/ST8TRX-110-15-ATSC/Star_Trac_8-TRx_Treadmill_110v__15__Console_ATSC/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6547/st8trx-110-15-atsc/star_trac_8-trx_treadmill_110v__15__console_atsc/');
    })
    it('/home/item/6549/st-8tc-110-15-atsc/star_trac_8-tc_treadclimber__110v__15__atsc', () => {
        cy.visit('https://fitnessfactory.com/home/item/6549/st-8tc-110-15-atsc/star_trac_8-tc_treadclimber__110v__15__atsc/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6549/st-8tc-110-15-atsc/star_trac_8-tc_treadclimber__110v__15__atsc/');
    })
    it('/home/item/6558/sptcrs800/spirit_crs800_recumbent_stepper', () => {
        cy.visit('https://fitnessfactory.com/home/item/6558/sptcrs800/spirit_crs800_recumbent_stepper/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6558/sptcrs800/spirit_crs800_recumbent_stepper/');
    })
    it('/home/item/6570/gwt56/body-solid_gwt56_olympic_weight_tree_and_bar_holder_', () => {
        cy.visit('https://fitnessfactory.com/home/item/6570/gwt56/body-solid_gwt56_olympic_weight_tree_and_bar_holder_/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6570/gwt56/body-solid_gwt56_olympic_weight_tree_and_bar_holder_/');
    })
    it('/home/item/6570/gwt56/body-solid_olympic_weight_plate_tree', () => {
        cy.visit('https://fitnessfactory.com/home/item/6570/gwt56/body-solid_olympic_weight_plate_tree/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6570/gwt56/body-solid_olympic_weight_plate_tree/');
    })
    it('/home/Item/6570/GWT56/Body-Solid_Olympic_Weight_Plate_Tree', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6570/GWT56/Body-Solid_Olympic_Weight_Plate_Tree/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6570/gwt56/body-solid_olympic_weight_plate_tree/');
    })
    it('/Home/Item/6581/9T10/Endurance_T10HRC_Treadmill_Floor_Model_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6581/9T10/Endurance_T10HRC_Treadmill_Floor_Model_Forest_Park/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6581/9t10/endurance_t10hrc_treadmill_floor_model_forest_park/');
    })
    it('/home/item/6599/lf-eq-ch/lebert_fitness_xl_chrome_equalizer_bar', () => {
        cy.visit('https://fitnessfactory.com/home/item/6599/lf-eq-ch/lebert_fitness_xl_chrome_equalizer_bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6599/lf-eq-ch/lebert_fitness_xl_chrome_equalizer_bar/');
    })
    it('/home/Item/6599/LF-EQ-CH/Lebert_Fitness_XL_Chrome_Equalizer_Bar', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6599/LF-EQ-CH/Lebert_Fitness_XL_Chrome_Equalizer_Bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6599/lf-eq-ch/lebert_fitness_xl_chrome_equalizer_bar/');
    })
    it('/home/item/6616/9parfs100-m/paramont_xft-100_functional_trainer_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/6616/9parfs100-m/paramont_xft-100_functional_trainer_floor_model/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6616/9parfs100-m/paramont_xft-100_functional_trainer_floor_model/');
    })
    it('/home/item/6623/9trups100r-m/true_ps100_recumbent_bike_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/6623/9trups100r-m/true_ps100_recumbent_bike_floor_model/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6623/9trups100r-m/true_ps100_recumbent_bike_floor_model/');
    })
    it('/home/item/6644/y253/rugged_plate_horn', () => {
        cy.visit('https://fitnessfactory.com/home/item/6644/y253/rugged_plate_horn/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6644/y253/rugged_plate_horn/');
    })
    it('/Home/Item/6646/Y254/Rugged_Base_Bar_Holder', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6646/Y254/Rugged_Base_Bar_Holder/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6646/y254/rugged_base_bar_holder/');
    })
    it('/home/item/6646/y254/rugged_base_bar_holder', () => {
        cy.visit('https://fitnessfactory.com/home/item/6646/y254/rugged_base_bar_holder/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6646/y254/rugged_base_bar_holder/');
    })
    it('/Home/Item/6671/SPRACB/Body-Solid_SPR_Connecting_Bar', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6671/SPRACB/Body-Solid_SPR_Connecting_Bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6671/spracb/body-solid_spr_connecting_bar/');
    })
    it('/home/item/6687/bstgt/body-solid_grip_trainers', () => {
        cy.visit('https://fitnessfactory.com/home/item/6687/bstgt/body-solid_grip_trainers/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6687/bstgt/body-solid_grip_trainers/');
    })
    it('/home/item/6693/hb208b/harbinger_stabilized_knee_sleeves', () => {
        cy.visit('https://fitnessfactory.com/home/item/6693/hb208b/harbinger_stabilized_knee_sleeves/');
        cy.url().should('eq', 'https://fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/Item/6708/GSS50/Body-Solid_Sissy_Squat', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6708/GSS50/Body-Solid_Sissy_Squat/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6708/gss50/body-solid_sissy_squat/');
    })
    it('/home/item/6709/bsttt/body-solid_tire_tread_slam_balls', () => {
        cy.visit('https://fitnessfactory.com/home/item/6709/bsttt/body-solid_tire_tread_slam_balls/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6709/bsttt/body-solid_tire_tread_slam_balls/');
    })
    it('/Home/Item/6719/OBPXC260/Chicago_Extreme_Color_Bumper_Plate_Set_260_Pounds', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6719/OBPXC260/Chicago_Extreme_Color_Bumper_Plate_Set_260_Pounds/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6719/obpxc260/chicago_extreme_color_bumper_plate_set_260_pounds/');
    })
    it('/home/item/6723/y1100/rugged_olympic_package', () => {
        cy.visit('https://fitnessfactory.com/home/item/6723/y1100/rugged_olympic_package/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6723/y1100/rugged_olympic_package/');
    })
    it('/Home/Item/6725/ABTF180XL/TireFlip_180_XL', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6725/ABTF180XL/TireFlip_180_XL/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6725/abtf180xl/tireflip_180_xl/');
    })
    it('/home/item/6725/abtf180xl/tireflip_180_xl', () => {
        cy.visit('https://fitnessfactory.com/home/item/6725/abtf180xl/tireflip_180_xl/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6725/abtf180xl/tireflip_180_xl/');
    })
    it('/home/Item/6725/ABTF180XL/TireFlip_180_XL', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6725/ABTF180XL/TireFlip_180_XL/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6725/abtf180xl/tireflip_180_xl/');
    })
    it('/home/Item/6736/ABSTARGET/Target_Abs_Fixed_Angle_Ab_Bench', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6736/ABSTARGET/Target_Abs_Fixed_Angle_Ab_Bench/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6736/abstarget/target_abs_fixed_angle_ab_bench/');
    })
    it('/home/item/6736/abstarget/target_abs_fixed_angle_ab_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/6736/abstarget/target_abs_fixed_angle_ab_bench/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6736/abstarget/target_abs_fixed_angle_ab_bench/');
    })
    it('/Home/Item/6737/ABVERTICALCRUNCH/Vertical_Crunch_Ab_Bench', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6737/ABVERTICALCRUNCH/Vertical_Crunch_Ab_Bench/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6737/abverticalcrunch/vertical_crunch_ab_bench/');
    })
    it('/home/Item/6750/GPU348/Smith_Machine_Pull_Up_Bar_Attachment', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6750/GPU348/Smith_Machine_Pull_Up_Bar_Attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6750/gpu348/smith_machine_pull_up_bar_attachment/');
    })
    it('/home/item/6774/hb24310-n/harbinger_4_inch_nylon_belt', () => {
        cy.visit('https://fitnessfactory.com/home/item/6774/hb24310-n/harbinger_4_inch_nylon_belt/');
        cy.url().should('eq', 'https://fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/6779/sts-ctx/star_trac_s-ctx_cross_trainer', () => {
        cy.visit('https://fitnessfactory.com/home/item/6779/sts-ctx/star_trac_s-ctx_cross_trainer/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6779/sts-ctx/star_trac_s-ctx_cross_trainer/');
    })
    it('/home/Item/6783/OB79EXT/Body-Solid_Women_s_Extreme_Olympic_Bar', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6783/OB79EXT/Body-Solid_Women_s_Extreme_Olympic_Bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6783/ob79ext/body-solid_women_s_extreme_olympic_bar/');
    })
    it('/home/item/6785/ocrb89/combat_ready_bar', () => {
        cy.visit('https://fitnessfactory.com/home/item/6785/ocrb89/combat_ready_bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6785/ocrb89/combat_ready_bar/');
    })
    it('/home/item/6786/9na-s1312/nautilus_impact_leg_extension', () => {
        cy.visit('https://fitnessfactory.com/home/item/6786/9na-s1312/nautilus_impact_leg_extension/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6786/9na-s1312/nautilus_impact_leg_extension/');
    })
    it('/Home/Item/6787/9NA-S6334/Nautilus_Chin_Dip_Assist', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6787/9NA-S6334/Nautilus_Chin_Dip_Assist/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6787/9na-s6334/nautilus_chin_dip_assist/');
    })
    it('/home/Item/6787/9NA-S6334/Nautilus_Impact_Chin_Dip_Assist', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6787/9NA-S6334/Nautilus_Impact_Chin_Dip_Assist/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6787/9na-s6334/nautilus_impact_chin_dip_assist/');
    })
    it('/home/item/6806/y100/rugged_power_rack', () => {
        cy.visit('https://fitnessfactory.com/home/item/6806/y100/rugged_power_rack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6806/y100/rugged_power_rack/');
    })
    it('/Home/Item/6806/Y100/Rugged_Power_Rack', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6806/Y100/Rugged_Power_Rack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6806/y100/rugged_power_rack/');
    })
    it('/home/item/6807/pmp150/powerline_multi_press_rack', () => {
        cy.visit('https://fitnessfactory.com/home/item/6807/pmp150/powerline_multi_press_rack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6807/pmp150/powerline_multi_press_rack/');
    })
    it('/Home/Item/6810/PPRBP/Powerline_Band_Pegs_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6810/PPRBP/Powerline_Band_Pegs_Attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6810/pprbp/powerline_band_pegs_attachment/');
    })
    it('/home/item/6810/pprbp/powerline_band_pegs_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/6810/pprbp/powerline_band_pegs_attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6810/pprbp/powerline_band_pegs_attachment/');
    })
    it('/home/Item/6810/PPRBP/Powerline_Band_Pegs_Attachment', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6810/PPRBP/Powerline_Band_Pegs_Attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6810/pprbp/powerline_band_pegs_attachment/');
    })
    it('/Home/Item/6811/PPRJC/Powerline_J-Cups', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6811/PPRJC/Powerline_J-Cups/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6811/pprjc/powerline_j-cups/');
    })
    it('/home/item/6811/pprjc/powerline_j-cups', () => {
        cy.visit('https://fitnessfactory.com/home/item/6811/pprjc/powerline_j-cups/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6811/pprjc/powerline_j-cups/');
    })
    it('/home/item/6812/pprps/powerline_pin_pipe_safeties', () => {
        cy.visit('https://fitnessfactory.com/home/item/6812/pprps/powerline_pin_pipe_safeties/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6812/pprps/powerline_pin_pipe_safeties/');
    })
    it('/Home/Item/6816/PPRMCU/Powerline_Multi_Chin_Up', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6816/PPRMCU/Powerline_Multi_Chin_Up/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6816/pprmcu/powerline_multi_chin_up/');
    })
    it('/home/Item/6819/9SMR1000-FP/Body-Solid_SMR1000_Floor_Model_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6819/9SMR1000-FP/Body-Solid_SMR1000_Floor_Model_Forest_Park/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6819/9smr1000-fp/body-solid_smr1000_floor_model_forest_park/');
    })
    it('/home/item/6821/9truxm50-fp/true_m50_elliptical_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/6821/9truxm50-fp/true_m50_elliptical_floor_model/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6821/9truxm50-fp/true_m50_elliptical_floor_model/');
    })
    it('/home/item/6823/9truc900-fp/true_c900_commercial_treadmill_floor_model_forest_park', () => {
        cy.visit('https://fitnessfactory.com/home/item/6823/9truc900-fp/true_c900_commercial_treadmill_floor_model_forest_park/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6823/9truc900-fp/true_c900_commercial_treadmill_floor_model_forest_park/');
    })
    it('/home/item/6826/bstch44/body-solid_lifting_chains', () => {
        cy.visit('https://fitnessfactory.com/home/item/6826/bstch44/body-solid_lifting_chains/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6826/bstch44/body-solid_lifting_chains/');
    })
    it('/home/item/6828/mb229a/aluminum_revolving_curl_bar', () => {
        cy.visit('https://fitnessfactory.com/home/item/6828/mb229a/aluminum_revolving_curl_bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6828/mb229a/aluminum_revolving_curl_bar/');
    })
    it('/Home/Item/6829/PLA1000/Powerline_Lat_Attachment_for_the_PPR1000', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6829/PLA1000/Powerline_Lat_Attachment_for_the_PPR1000/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6829/pla1000/powerline_lat_attachment_for_the_ppr1000/');
    })
    it('/Home/Item/6830/PLA500/Powerline_Half_Rack_Lat_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6830/PLA500/Powerline_Half_Rack_Lat_Attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6830/pla500/powerline_half_rack_lat_attachment/');
    })
    it('/home/item/6830/pla500/powerline_half_rack_lat_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/6830/pla500/powerline_half_rack_lat_attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6830/pla500/powerline_half_rack_lat_attachment/');
    })
    it('/Home/Item/6831/MB022A/Aluminum_Revolving_Straight_Bar', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6831/MB022A/Aluminum_Revolving_Straight_Bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6831/mb022a/aluminum_revolving_straight_bar/');
    })
    it('/Home/Item/6832/MB100A/Aluminum_Double_Swivel_Bar', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6832/MB100A/Aluminum_Double_Swivel_Bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6832/mb100a/aluminum_double_swivel_bar/');
    })
    it('/home/item/6847/y100p8/rugged_power_rack_package_with_free_300lb__weight_set', () => {
        cy.visit('https://fitnessfactory.com/home/item/6847/y100p8/rugged_power_rack_package_with_free_300lb__weight_set/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/6847/y100p8/rugged_power_rack_package_with_free_300lb__weight_set/');
    })
    it('/Home/Item/7853/SPTAB900/Spirit_AB900_Air_Bike', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7853/SPTAB900/Spirit_AB900_Air_Bike/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7853/sptab900/spirit_ab900_air_bike/');
    })
    it('/home/item/7867/sprn/neoprene_dumbbells_by_spri__3-15_pounds', () => {
        cy.visit('https://fitnessfactory.com/home/item/7867/sprn/neoprene_dumbbells_by_spri__3-15_pounds/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7867/sprn/neoprene_dumbbells_by_spri__3-15_pounds/');
    })
    it('/home/Item/7877/RPCW-SET/Body-Solid_Cardio_Barbell_Set', () => {
        cy.visit('https://fitnessfactory.com/home/Item/7877/RPCW-SET/Body-Solid_Cardio_Barbell_Set/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7877/rpcw-set/body-solid_cardio_barbell_set/');
    })
    it('/home/item/7877/rpcw-set/body-solid_cardio_barbell_set', () => {
        cy.visit('https://fitnessfactory.com/home/item/7877/rpcw-set/body-solid_cardio_barbell_set/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7877/rpcw-set/body-solid_cardio_barbell_set/');
    })
    it('/home/item/7878/trxpro4/trx_pro_4_system_suspension_trainer', () => {
        cy.visit('https://fitnessfactory.com/home/item/7878/trxpro4/trx_pro_4_system_suspension_trainer/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7878/trxpro4/trx_pro_4_system_suspension_trainer/');
    })
    it('/Home/Item/7878/TRXPRO4/TRX_Pro_4_System_Suspension_Trainer', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7878/TRXPRO4/TRX_Pro_4_System_Suspension_Trainer/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7878/trxpro4/trx_pro_4_system_suspension_trainer/');
    })
    it('/home/item/7880/trxxmount3/trx_xmount', () => {
        cy.visit('https://fitnessfactory.com/home/item/7880/trxxmount3/trx_xmount/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7880/trxxmount3/trx_xmount/');
    })
    it('/home/Item/7880/TRXXMOUNT3/TRX_XMount', () => {
        cy.visit('https://fitnessfactory.com/home/Item/7880/TRXXMOUNT3/TRX_XMount/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7880/trxxmount3/trx_xmount/');
    })
    it('/Home/Item/7880/TRXXMOUNT3/TRX_XMount', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7880/TRXXMOUNT3/TRX_XMount/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7880/trxxmount3/trx_xmount/');
    })
    it('/home/item/7882/9trups100-fp/true_performance_100_treadmill_floor_model_forest_park', () => {
        cy.visit('https://fitnessfactory.com/home/item/7882/9trups100-fp/true_performance_100_treadmill_floor_model_forest_park/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7882/9trups100-fp/true_performance_100_treadmill_floor_model_forest_park/');
    })
    it('/Home/Item/7887/9PCCO90X/Powerline_Cable_Crossover_Floor_Model_in_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7887/9PCCO90X/Powerline_Cable_Crossover_Floor_Model_in_Forest_Park/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7887/9pcco90x/powerline_cable_crossover_floor_model_in_forest_park/');
    })
    it('/Home/Item/7901/9T10-A/Endurance_T10HRC_Treadmill_Floor_Model_Aurora', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7901/9T10-A/Endurance_T10HRC_Treadmill_Floor_Model_Aurora/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7901/9t10-a/endurance_t10hrc_treadmill_floor_model_aurora/');
    })
    it('/home/Item/7906/9TRUTM50-A/True_M50_Treadmill_Floor_Model_Aurora', () => {
        cy.visit('https://fitnessfactory.com/home/Item/7906/9TRUTM50-A/True_M50_Treadmill_Floor_Model_Aurora/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7906/9trutm50-a/true_m50_treadmill_floor_model_aurora/');
    })
    it('/home/item/7907/9truz5-a/true_z5_0_treadmill_floor_model_aurora', () => {
        cy.visit('https://fitnessfactory.com/home/item/7907/9truz5-a/true_z5_0_treadmill_floor_model_aurora/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7907/9truz5-a/true_z5_0_treadmill_floor_model_aurora/');
    })
    it('/Home/Item/7913/RFHU463/4ECO/Heavy_Duty_4__x_6__Rubber_Floor_Mat_3_4_inch_Thick', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/7913/RFHU463/4ECO/Heavy_Duty_4__x_6__Rubber_Floor_Mat_3_4_inch_Thick/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7913/rfhu463/4eco/heavy_duty_4__x_6__rubber_floor_mat_3_4_inch_thick/');
    })
    it('/home/item/7919/therapy/endurance_therapy_package', () => {
        cy.visit('https://fitnessfactory.com/home/item/7919/therapy/endurance_therapy_package/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/7919/therapy/endurance_therapy_package/');
    })
    it('/home/item/8928/st-4tr/star_trac_4_series_treadmill', () => {
        cy.visit('https://fitnessfactory.com/home/item/8928/st-4tr/star_trac_4_series_treadmill/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8928/st-4tr/star_trac_4_series_treadmill/');
    })
    it('/home/Item/8934/GLP-STK/3/Body-Solid_Pro_Select_Leg_Press_Machine_310lb__Stack', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8934/GLP-STK/3/Body-Solid_Pro_Select_Leg_Press_Machine_310lb__Stack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8934/glp-stk/3/body-solid_pro_select_leg_press_machine_310lb__stack/');
    })
    it('/home/item/8936/tfths01-bk/trakhandle_sport_cable_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/8936/tfths01-bk/trakhandle_sport_cable_attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8936/tfths01-bk/trakhandle_sport_cable_attachment/');
    })
    it('/home/item/8937/tfsr1000/trak_fitness_sportrower_rowing_machine_bar', () => {
        cy.visit('https://fitnessfactory.com/home/item/8937/tfsr1000/trak_fitness_sportrower_rowing_machine_bar/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8937/tfsr1000/trak_fitness_sportrower_rowing_machine_bar/');
    })
    it('/home/item/8944/gcbt-stk/3/body-solid_pro_select_bicep_tricep_machine_300lb__stack', () => {
        cy.visit('https://fitnessfactory.com/home/item/8944/gcbt-stk/3/body-solid_pro_select_bicep_tricep_machine_300lb__stack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8944/gcbt-stk/3/body-solid_pro_select_bicep_tricep_machine_300lb__stack/');
    })
    it('/home/item/8946/giot-stk/3/body-solid_pro_select_inner_outer_thigh_machine_300lb__stack', () => {
        cy.visit('https://fitnessfactory.com/home/item/8946/giot-stk/3/body-solid_pro_select_inner_outer_thigh_machine_300lb__stack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8946/giot-stk/3/body-solid_pro_select_inner_outer_thigh_machine_300lb__stack/');
    })
    it('/home/item/8948/fdnewport/first_degree_newport_challenge_ar_indoor_rower', () => {
        cy.visit('https://fitnessfactory.com/home/item/8948/fdnewport/first_degree_newport_challenge_ar_indoor_rower/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/first-degree/');
    })
    it('/home/Item/8956/FDEVX3/First_Degree_VX3_FA_Indoor_Rower', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8956/FDEVX3/First_Degree_VX3_FA_Indoor_Rower/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/first-degree/');
    })
    it('/home/Item/8967/B4RB/Endurance_B4RB_Recumbent_Bike', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8967/B4RB/Endurance_B4RB_Recumbent_Bike/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8967/b4rb/endurance_b4rb_recumbent_bike/');
    })
    it('/home/item/8968/sptcrw800h2o/spirit_crw800h20_rower', () => {
        cy.visit('https://fitnessfactory.com/home/item/8968/sptcrw800h2o/spirit_crw800h20_rower/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8968/sptcrw800h2o/spirit_crw800h20_rower/');
    })
    it('/home/Item/8968/SPTCRW800H2O/Spirit_CRW800H20_Rower', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8968/SPTCRW800H2O/Spirit_CRW800H20_Rower/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8968/sptcrw800h2o/spirit_crw800h20_rower/');
    })
    it('/Home/Item/8970/RX5500/Ropeflex_RX5500_Oryx_2_Vertical_Rope_Pulling_Machine', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8970/RX5500/Ropeflex_RX5500_Oryx_2_Vertical_Rope_Pulling_Machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8970/rx5500/ropeflex_rx5500_oryx_2_vertical_rope_pulling_machine/');
    })
    it('/home/item/8970/rx5500/ropeflex_rx5500_oryx_2_vertical_rope_pulling_machine', () => {
        cy.visit('https://fitnessfactory.com/home/item/8970/rx5500/ropeflex_rx5500_oryx_2_vertical_rope_pulling_machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8970/rx5500/ropeflex_rx5500_oryx_2_vertical_rope_pulling_machine/');
    })
    it('/home/item/8971/rx3300/ropeflex_rx3300_vortex_dual_drum_rope_pulling_machine', () => {
        cy.visit('https://fitnessfactory.com/home/item/8971/rx3300/ropeflex_rx3300_vortex_dual_drum_rope_pulling_machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8971/rx3300/ropeflex_rx3300_vortex_dual_drum_rope_pulling_machine/');
    })
    it('/home/Item/8972/RX3200/Ropeflex_RX3200_Addax_Horizontal_Rope_Pulling_Machine', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8972/RX3200/Ropeflex_RX3200_Addax_Horizontal_Rope_Pulling_Machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8972/rx3200/ropeflex_rx3200_addax_horizontal_rope_pulling_machine/');
    })
    it('/home/item/8972/rx3200/ropeflex_rx3200_addax_horizontal_rope_pulling_machine', () => {
        cy.visit('https://fitnessfactory.com/home/item/8972/rx3200/ropeflex_rx3200_addax_horizontal_rope_pulling_machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8972/rx3200/ropeflex_rx3200_addax_horizontal_rope_pulling_machine/');
    })
    it('/Home/Item/8974/RX4400/Ropeflex_RX4400_Apex_Tread_Climbing_Rope_Machine', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8974/RX4400/Ropeflex_RX4400_Apex_Tread_Climbing_Rope_Machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8974/rx4400/ropeflex_rx4400_apex_tread_climbing_rope_machine/');
    })
    it('/home/item/8977/rx0505/ropeflex_rx0505_hydra', () => {
        cy.visit('https://fitnessfactory.com/home/item/8977/rx0505/ropeflex_rx0505_hydra/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8977/rx0505/ropeflex_rx0505_hydra/');
    })
    it('/home/Item/8977/RX0505/Ropeflex_RX0505_Hydra', () => {
        cy.visit('https://fitnessfactory.com/home/Item/8977/RX0505/Ropeflex_RX0505_Hydra/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8977/rx0505/ropeflex_rx0505_hydra/');
    })
    it('/Home/Item/8978/RX2500T/Ropeflex_RX2500_Oryx_Tri_Station_Rope_Pulling_Machine', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8978/RX2500T/Ropeflex_RX2500_Oryx_Tri_Station_Rope_Pulling_Machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8978/rx2500t/ropeflex_rx2500_oryx_tri_station_rope_pulling_machine/');
    })
    it('/home/item/8978/rx2500t/ropeflex_rx2500_oryx_tri_station_rope_pulling_machine', () => {
        cy.visit('https://fitnessfactory.com/home/item/8978/rx2500t/ropeflex_rx2500_oryx_tri_station_rope_pulling_machine/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8978/rx2500t/ropeflex_rx2500_oryx_tri_station_rope_pulling_machine/');
    })
    it('/home/item/8990/abverticalcrunchb/vertical_crunch_ab_bench_black', () => {
        cy.visit('https://fitnessfactory.com/home/item/8990/abverticalcrunchb/vertical_crunch_ab_bench_black/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8990/abverticalcrunchb/vertical_crunch_ab_bench_black/');
    })
    it('/Home/Item/8992/9TRUZ54-C/True_Z5_4_Treadmill_Floor_Model_Chicago', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8992/9TRUZ54-C/True_Z5_4_Treadmill_Floor_Model_Chicago/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8992/9truz54-c/true_z5_4_treadmill_floor_model_chicago/');
    })
    it('/home/item/8996/9trucs400e16t-c/true_c400_commercial_elliptical_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/8996/9trucs400e16t-c/true_c400_commercial_elliptical_floor_model/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8996/9trucs400e16t-c/true_c400_commercial_elliptical_floor_model/');
    })
    it('/Home/Item/8998/ENVISION16/True_Envision_16_Console', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8998/ENVISION16/True_Envision_16_Console/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8998/envision16/true_envision_16_console/');
    })
    it('/Home/Item/8999/ENVISION9/True_Envision_9_Console', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/8999/ENVISION9/True_Envision_9_Console/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/8999/envision9/true_envision_9_console/');
    })
    it('/home/item/9010/st-8th/star_trac_8_series_trail_hiker', () => {
        cy.visit('https://fitnessfactory.com/home/item/9010/st-8th/star_trac_8_series_trail_hiker/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9010/st-8th/star_trac_8_series_trail_hiker/');
    })
    it('/Home/Item/9014/9TRUXM30-M/True_M30_Elliptical_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/9014/9TRUXM30-M/True_M30_Elliptical_Floor_Model/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9014/9truxm30-m/true_m30_elliptical_floor_model/');
    })
    it('/home/item/9037/gpr400/body-solid_gpr400_power_rack', () => {
        cy.visit('https://fitnessfactory.com/home/item/9037/gpr400/body-solid_gpr400_power_rack/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9037/gpr400/body-solid_gpr400_power_rack/');
    })
    it('/Home/Item/9038/GLA400/Body-Solid_GLA400_Lat_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/9038/GLA400/Body-Solid_GLA400_Lat_Attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9038/gla400/body-solid_gla400_lat_attachment/');
    })
    it('/home/item/9049/gprtbr/body-solid_gpr400_t-bar_row_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/9049/gprtbr/body-solid_gpr400_t-bar_row_attachment/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9049/gprtbr/body-solid_gpr400_t-bar_row_attachment/');
    })
    it('/Home/Item/9053/BSTOBS/Body-Solid_Tools_Bar_Stand', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/9053/BSTOBS/Body-Solid_Tools_Bar_Stand/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9053/bstobs/body-solid_tools_bar_stand/');
    })
    it('/home/item/9053/bstobs/body-solid_tools_bar_stand', () => {
        cy.visit('https://fitnessfactory.com/home/item/9053/bstobs/body-solid_tools_bar_stand/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9053/bstobs/body-solid_tools_bar_stand/');
    })
    it('/home/item/9054/bstolp/body-solid_tools_olympic_lifting_pin', () => {
        cy.visit('https://fitnessfactory.com/home/item/9054/bstolp/body-solid_tools_olympic_lifting_pin/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/9054/bstolp/body-solid_tools_olympic_lifting_pin/');
    })
    it('/Home/Jacobs-Ladder', () => {
        cy.visit('https://fitnessfactory.com/Home/Jacobs-Ladder');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/Home/Jacobs-Ladder', () => {
        cy.visit('https://fitnessfactory.com/Home/Jacobs-Ladder/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/home/jacobs-ladder', () => {
        cy.visit('https://fitnessfactory.com/home/jacobs-ladder/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/Home/Landice', () => {
        cy.visit('https://fitnessfactory.com/Home/Landice');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/landice/');
    })
    it('/Home/OnSale/Cross-Training', () => {
        cy.visit('https://fitnessfactory.com/Home/OnSale/Cross-Training');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/Home/OnSale/Package-Deals', () => {
        cy.visit('https://fitnessfactory.com/Home/OnSale/Package-Deals');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/Home/OnSale/Racks-Cages', () => {
        cy.visit('https://fitnessfactory.com/Home/OnSale/Racks-Cages');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/Home/Outlet', () => {
        cy.visit('https://fitnessfactory.com/Home/Outlet/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/');
    })
    it('/home/outlet/floor-models', () => {
        cy.visit('https://fitnessfactory.com/home/outlet/floor-models/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/floor-models/');
    })
    it('/home/outlet/floor-models/?sort=2&term&queryID=242&action=subcategorysearch&smtoken=D6D30E16-07AB-AC47-7CCE641C7835BD5C', () => {
        cy.visit('https://fitnessfactory.com/home/outlet/floor-models/?sort=2&term&queryID=242&action=subcategorysearch&smtoken=D6D30E16-07AB-AC47-7CCE641C7835BD5C');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/floor-models/?sort=2&term&queryID=242&action=subcategorysearch&smtoken=D6D30E16-07AB-AC47-7CCE641C7835BD5C');
    })
    it('/Home/Outlet/Package-Deals', () => {
        cy.visit('https://fitnessfactory.com/Home/Outlet/Package-Deals/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/package-deals/');
    })
    it('/Home/perkspot', () => {
        cy.visit('https://fitnessfactory.com/Home/perkspot');
        cy.url().should('eq', 'https://fitnessfactory.com/perkspot/');
    })
    it('/Home/PerkSpot', () => {
        cy.visit('https://fitnessfactory.com/Home/PerkSpot/');
        cy.url().should('eq', 'https://fitnessfactory.com/perkspot/');
    })
    it('/Home/Precor', () => {
        cy.visit('https://fitnessfactory.com/Home/Precor');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/precor/');
    })
    it('/home/Schwinn/Schwinn-Cycles', () => {
        cy.visit('https://fitnessfactory.com/home/Schwinn/Schwinn-Cycles');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/schwinn/');
    })
    it('/Home/Spirit-Fitness/Spirit-TCR-Accessories', () => {
        cy.visit('https://fitnessfactory.com/Home/Spirit-Fitness/Spirit-TCR-Accessories');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spirit-fitness/');
    })
    it('/home/spirit-fitness/spirit-tcr-accessories', () => {
        cy.visit('https://fitnessfactory.com/home/spirit-fitness/spirit-tcr-accessories');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spirit-fitness/');
    })
    it('/home/Spri', () => {
        cy.visit('https://fitnessfactory.com/home/Spri');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spri/');
    })
    it('/home/spri', () => {
        cy.visit('https://fitnessfactory.com/home/spri');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spri/');
    })
    it('/Home/StairMaster', () => {
        cy.visit('https://fitnessfactory.com/Home/StairMaster');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/stairmaster/');
    })
    it('/home/Star-Trac/Star-Trac-Cardio', () => {
        cy.visit('https://fitnessfactory.com/home/Star-Trac/Star-Trac-Cardio');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/star-trac/');
    })
    it('/Home/Trak-Fitness', () => {
        cy.visit('https://fitnessfactory.com/Home/Trak-Fitness');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/trak-fitness/');
    })
    it('/Home/Weight-Machines/Ab-Machines', () => {
        cy.visit('https://fitnessfactory.com/Home/Weight-Machines/Ab-Machines/');
        cy.url().should('eq', 'https://fitnessfactory.com/weight-machines/ab-machines/');
    })
    it('/Home/Weight-Machines/Chest-Shoulder-Machines', () => {
        cy.visit('https://fitnessfactory.com/Home/Weight-Machines/Chest-Shoulder-Machines/');
        cy.url().should('eq', 'https://fitnessfactory.com/weight-machines/chest-shoulder-machines/');
    })
    it('/Home/Weight-Machines/Smith-Machines', () => {
        cy.visit('https://fitnessfactory.com/Home/Weight-Machines/Smith-Machines');
        cy.url().should('eq', 'https://fitnessfactory.com/home-gyms/smith-machines/');
    })
    it('/humane', () => {
        cy.visit('https://fitnessfactory.com/humane/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/humane/');
    })
    it('/item/19029/9m-wintpo/schwinn_ac_sport_indoor_cycle_w__carbon_belt_floor_model__mundelein', () => {
        cy.visit('https://fitnessfactory.com/item/19029/9m-wintpo/schwinn_ac_sport_indoor_cycle_w__carbon_belt_floor_model__mundelein/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/19029/9m-wintpo/schwinn_ac_sport_indoor_cycle_w__carbon_belt_floor_model__mundelein/');
    })
    it('/item/5712/sr-hex/body-solid_sr-hex_hexagon_training_rig', () => {
        cy.visit('https://fitnessfactory.com/item/5712/sr-hex/body-solid_sr-hex_hexagon_training_rig/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/power-racks/');
    })
    it('/item/5737/sr-hexpro/body-solid_hexagon_pro_training_rig', () => {
        cy.visit('https://fitnessfactory.com/item/5737/sr-hexpro/body-solid_hexagon_pro_training_rig/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/power-racks/');
    })
    it('/item/5739/sr-hexproadvanced/hexagon_pro_training_rig_advanced_package', () => {
        cy.visit('https://fitnessfactory.com/item/5739/sr-hexproadvanced/hexagon_pro_training_rig_advanced_package/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/power-racks/');
    })
    it('/item/5743/trumscb/true_indoor_cycling_bike', () => {
        cy.visit('https://fitnessfactory.com/item/5743/trumscb/true_indoor_cycling_bike/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/5743/trumscb/true_indoor_cycling_bike/');
    })
    it('/item/5830/test519/test/service', () => {
        cy.visit('https://fitnessfactory.com/item/5830/test519/test/service=/');
        cy.url().should('eq', 'https://fitnessfactory.com/item/5830/test519/test/service=/');
    })
    it('/jacobs-ladder', () => {
        cy.visit('https://fitnessfactory.com/jacobs-ladder/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/jacobs-ladder', () => {
        cy.visit('https://fitnessfactory.com/jacobs-ladder/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/jacobs-ladder', () => {
        cy.visit('https://fitnessfactory.com/jacobs-ladder/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/jacobs-ladder/');
    })
    it('/landice', () => {
        cy.visit('https://fitnessfactory.com/landice/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/landice/');
    })
    it('/onsale/cross-training', () => {
        cy.visit('https://fitnessfactory.com/onsale/cross-training/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/onsale/package-deals', () => {
        cy.visit('https://fitnessfactory.com/onsale/package-deals/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/onsale/racks-cages', () => {
        cy.visit('https://fitnessfactory.com/onsale/racks-cages/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/sale-items/');
    })
    it('/Outlet/Remanufactured', () => {
        cy.visit('https://fitnessfactory.com/Outlet/Remanufactured/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/remanufactured/');
    })
    it('/Outlet/Weight-Set-Deal', () => {
        cy.visit('https://fitnessfactory.com/Outlet/Weight-Set-Deal/');
        cy.url().should('eq', 'https://fitnessfactory.com/outlet/weight-set-deal/');
    })
    it('/precor', () => {
        cy.visit('https://fitnessfactory.com/precor/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/precor/');
    })
    it('/Product_Email.cfm?ID=6350', () => {
        cy.visit('https://fitnessfactory.com/Product_Email.cfm?ID=6350');
        cy.url().should('eq', 'https://fitnessfactory.com/Product_Email.cfm?ID=6350');
    })
    it('/Racks-Cages/Squat-Racks-Stands', () => {
        cy.visit('https://fitnessfactory.com/Racks-Cages/Squat-Racks-Stands/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/squat-racks-stands/');
    })
    it('/Racks-Cages/Wall-Mounted-Rigs', () => {
        cy.visit('https://fitnessfactory.com/Racks-Cages/Wall-Mounted-Rigs/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
    })
    it('/Racks-Cages/Wall-Mounted-Rigs', () => {
        cy.visit('https://fitnessfactory.com/Racks-Cages/Wall-Mounted-Rigs/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
    })
    it('/racks-cages/wall-mounted-rigs', () => {
        cy.visit('https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
    })
    it('/racks-cages/wall-mounted-rigs', () => {
        cy.visit('https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
        cy.url().should('eq', 'https://fitnessfactory.com/racks-cages/wall-mounted-rigs/');
    })
    it('/Review/RateProduct.cfm?ItemID=5293', () => {
        cy.visit('https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=5293');
        cy.url().should('eq', 'https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=5293');
    })
    it('/Review/RateProduct.cfm?ItemID=5449', () => {
        cy.visit('https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=5449');
        cy.url().should('eq', 'https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=5449');
    })
    it('/Review/RateProduct.cfm?ItemID=6754', () => {
        cy.visit('https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=6754');
        cy.url().should('eq', 'https://fitnessfactory.com/Review/RateProduct.cfm?ItemID=6754');
    })
    it('/schwinn/schwinn-cycles', () => {
        cy.visit('https://fitnessfactory.com/schwinn/schwinn-cycles/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/schwinn/');
    })
    it('/spirit-fitness/spirit-tcr-accessories', () => {
        cy.visit('https://fitnessfactory.com/spirit-fitness/spirit-tcr-accessories/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spirit-fitness/');
    })
    it('/spirit-fitness/spirit-tcr-accessories', () => {
        cy.visit('https://fitnessfactory.com/spirit-fitness/spirit-tcr-accessories/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spirit-fitness/');
    })
    it('/spri', () => {
        cy.visit('https://fitnessfactory.com/spri/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spri/');
    })
    it('/spri', () => {
        cy.visit('https://fitnessfactory.com/spri/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/spri/');
    })
    it('/stairmaster', () => {
        cy.visit('https://fitnessfactory.com/stairmaster/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/stairmaster/');
    })
    it('/star-trac/star-trac-cardio', () => {
        cy.visit('https://fitnessfactory.com/star-trac/star-trac-cardio/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/star-trac/');
    })
    it('/trak-fitness', () => {
        cy.visit('https://fitnessfactory.com/trak-fitness/');
        cy.url().should('eq', 'https://fitnessfactory.com/brand/trak-fitness/');
    })
    it('/Weight-Machines/Arms', () => {
        cy.visit('https://fitnessfactory.com/Weight-Machines/Arms/');
        cy.url().should('eq', 'https://fitnessfactory.com/weight-machines/arms/');
    })
    it('/Weight-Machines/Cable-Attachments', () => {
        cy.visit('https://fitnessfactory.com/Weight-Machines/Cable-Attachments/');
        cy.url().should('eq', 'https://fitnessfactory.com/weight-machines/cable-attachments/');
    })
    it('/Weight-Machines/Calf-Machines', () => {
        cy.visit('https://fitnessfactory.com/Weight-Machines/Calf-Machines/');
        cy.url().should('eq', 'https://fitnessfactory.com/weight-machines/calf-machines/');
    })
})
