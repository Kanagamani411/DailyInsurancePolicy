package com.kax.DailyInsurancePortal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kax.DailyInsurancePortal.model.Purchase;
import com.kax.DailyInsurancePortal.repository.PurchaseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;
     
      

@Service
public class PurchaseService {

	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@Autowired
	private WalletService walletService;
	
	private static final Logger log = LoggerFactory.getLogger(PurchaseService.class);

	public String savePurchase(Purchase purchase) throws Exception{ 
		 Date date = new Date();
	     SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yy");
	     String str = formatter.format(date);
	     
	     Purchase pur = purchaseRepository.findByUsername(purchase.getUsername());
		 if( pur == null ) {
			 purchase.setPurchase_dttm(str);
			 walletService.updateWallet(purchase.getPremium(),purchase.getUsername());
			 log.info("wallet updated");
			 log.info("purchase Added");
			 purchaseRepository.save(purchase);
			 return "purchase added";
		 }
		 throw new Exception("purchase existed");
		
	}
}
