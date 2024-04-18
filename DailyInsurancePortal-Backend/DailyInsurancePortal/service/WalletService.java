package com.kax.DailyInsurancePortal.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.kax.DailyInsurancePortal.exception.NoMatchException;
import com.kax.DailyInsurancePortal.model.Purchase;
//import com.kax.DailyInsurancePortal.model.Purchase;
import com.kax.DailyInsurancePortal.model.Wallet;
import com.kax.DailyInsurancePortal.repository.PurchaseRepository;
import com.kax.DailyInsurancePortal.repository.WalletRepository;

@Service
public class WalletService {

	@Autowired
	private WalletRepository walletRepository;
	
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	private static final Logger log = LoggerFactory.getLogger(WalletService.class);
	
	public String saveWallet(Wallet wallet) throws Exception {
		
	   if((wallet.getAmount()<=10000) && (wallet.getAmount()>=1)) {
		   Wallet wal = walletRepository.findByUsername(wallet.getUsername());
	        if (wal != null) {
	            wal.setUsername(wallet.getUsername());
	            wal.setMode(wallet.getMode());
	            wal.setAmount(wallet.getAmount()+wal.getAmount());
	            //wal.setBalance(wal.getAmount()+wal.getAmount());
	            log.info("updating the wallet");
	            walletRepository.save(wal);
	            return "amount updated to the wallet";
	        }
	
	        //wallet.setBalance(wallet.getAmount());
	        log.info("wallet Added");
	        walletRepository.save(wallet);
	        return "amount added to the wallet";
	   }
	   throw new Exception("amount less than 10000 and more than 0");
        
    }
	
	public int updateWallet(int amt, String username) {
		Wallet wal = walletRepository.findByUsername(username);
		wal.setAmount(wal.getAmount()-amt);
		return wal.getAmount();
	}

	public int updateWal(String policyName, int amt, String username) {
		Purchase pur = purchaseRepository.findByUsername(username);
		String name = pur.getPolicyName();
		Wallet wal = walletRepository.findByUsername(username);
		if(name.equalsIgnoreCase(policyName) && amt<=wal.getAmount()) {
				wal.setAmount(wal.getAmount()+amt);
				return wal.getAmount();
		}
		return wal.getAmount();
	}
}
